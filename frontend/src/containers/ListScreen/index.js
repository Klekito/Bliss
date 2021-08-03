import React, {useEffect, useState, useRef} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import { getQuestions } from '../../api/questions';
import Card from '../../components/Card';
import ShareDialog from '../../components/Dialog';
import useOnScreen from '../../hooks/useOnScreen';


const ListScreen = (props) => {
    const location = useLocation();
    const [filter, setFilter] = useState(null)
    const [data, setData] = useState([])
    const [mounted, setMounted] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const toggleDialog = (id) => {
        if(showDialog){
            setShowDialog(false)
            setSelectedQuestion(null)
        }else{
            setShowDialog(true)
            setSelectedQuestion(id)
        }
    }
    
    /* const ref = useRef() */
    /* const isVisible = useOnScreen(ref) */
    
    const refInput = useRef(null)

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const keys = [...params.keys()]
        if(keys.includes('filter')) {
            const filter = params.get('filter')
            if(filter.length > 0) {
                setFilter(filter)
                handleGetQuestions('','', filter)
            }
            else {
                refInput.current.focus()
            }
        }else{
            handleGetQuestions().then(
                setMounted(true)
            )
        }
    }, [])

    /* useEffect(() => {
        console.log(isVisible, mounted)
        if(isVisible && mounted) {

        }
    }, [isVisible]) */
    
    const handleGetQuestions = async (limit, offset, filter) => {
        return getQuestions(limit, offset, filter).then(
            data => {
                let newData = [...data];
                newData.concat(data);
                setData(newData)
            }
        ).catch( data => setData([]))
    }

    return (
        <> 
            <div style={{margin:' 1rem'}}>
                <input ref={refInput} id="filter" type="text" className="text-field" name="filter" value={filter ? filter : ''} onChange={(e) => setFilter(e.target.value)} placeholder="Filter"/>
                <button id="research" className="myButton" name="filter" onClick={() => handleGetQuestions()}>Browse More</button>
            </div>
            <div className="list-container">
                {data.map((data, index) => <Card key={index}
                 id={data.id} 
                 cardIndex={index} 
                 question={data.question} 
                 choices={data.choices} 
                 published_at={data.published_at} 
                 image_url={data.image_url}
                 toggleDialog={toggleDialog}
                 /> )}
            </div>
            {/* <div ref={ref}>{isVisible && 'DAAALE'}</div> */}
            <ShareDialog questionNumber={selectedQuestion} open={showDialog} handleClose={toggleDialog}/>
        </>
    )
}

export default ListScreen;