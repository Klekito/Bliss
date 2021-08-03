import React, {useEffect, useState} from 'react';
import {checkHeathStatus} from '../../api/serverHealth';
import ReactLoading from "react-loading";
import { Redirect } from 'react-router-dom';
import { Spinner } from '../../components/Spinner/Spinner';

const SERVER_STATUS = {
    OK: 'OK',
    NOTOK: 'NOT OK',
    RESET: 'RESET'
}

const LoadingScreen = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [serverHealth, setServerHealth] = useState(SERVER_STATUS.RESET);

    useEffect(() => {
        checkServerStatus()
    }, [])

    const checkServerStatus = async () => {
        setServerHealth(SERVER_STATUS.RESET)
        setLoading(true)
        await checkHeathStatus().then(
            status => setServerHealth(SERVER_STATUS.OK)
        ).catch(
            status => setServerHealth(SERVER_STATUS.NOTOK)
        )
        setLoading(false)
    }

    if(serverHealth === SERVER_STATUS.OK) return <Redirect to="questions" />

    return (
        <>
            { isLoading && <Spinner /> }
            { serverHealth === SERVER_STATUS.NOTOK && <button onClick={() => checkServerStatus()}>Retry Action</button> }
        </>
    )
}

export default LoadingScreen;
