import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionDetails, updateQuestionDetails } from '../../api/questions'
import ShareDialog from '../../components/Dialog';

const DetailScreen = () => {

    const {id} = useParams();

    const [questionData, setQuestionData] = useState({})
    const [showDialog, setShowDialog] = useState(false)

    const toggleDialog = () => {
        setShowDialog(!showDialog)
    }
    
    useEffect(() => {
        if( !isNaN(+id) ){
            getQuestionDetails(id).then(
                data => setQuestionData(data)
            )
        }
    }, [])

    const dataKeys = Object.keys(questionData).map(
        key =>  key[0].toUpperCase() + key.substring(1, key.length)
    );
    const dataValues = Object.values(questionData);

    console.log(dataKeys, dataValues)

    const handleUpdateData = (optionIndex) => {
        const newData = {...questionData}
        newData.choices[optionIndex].votes = newData.choices[optionIndex].votes + 1

        updateQuestionDetails(id, newData).then(
            res => alert('Submited')
        )
    }

    return (
        <div>
            <h1 style={{
                color: "#1C8A84",
            }}> Question #{id} <button className="myButton" onClick={() => toggleDialog()}> Share </button></h1>
            {/* <pre>
                {JSON.stringify(questionData, undefined, 2)}
            </pre> */}

            <table>
                { dataKeys.map(
                    (key, index) => {
                        if(typeof dataValues[index] === 'string') {
                            return <tr key={index}>
                                <td>{key}</td>
                                <td>{dataValues[index]}</td>
                            </tr>
                        }
                        if(typeof dataValues[index] === 'object'){
                            return <tr key={index}>
                                <td>{key}</td>
                                <td className="table-value">
                                    <table>
                                        <tr>
                                            <th>Choice</th>
                                            <th>Votes</th>
                                        </tr>
                                        {
                                            dataValues[index].map( (c, index) => <tr className="table-choice">
                                                <td className="table-choice-label">{c.choice}</td>
                                                <td className="table-choice-vote"> <strong>{c.votes}</strong> <button className="myButton" onClick={() => handleUpdateData(index)}>upvote</button></td>
                                                 </tr>)
                                        }
                                    </table>
                                    
                                </td>
                            </tr>
                        }
                        
                    }
                )}
            </table>
            
            <ShareDialog questionNumber={id} open={showDialog} handleClose={toggleDialog}/>
        </div>
    )
}

export default DetailScreen;