import React from 'react';
import { VscDebugDisconnect } from 'react-icons/vsc'

const Offline = () => {
    return <div className="offline-container">
        <h1>You are Offline</h1>
        <br/>
        <VscDebugDisconnect className="icon-big" height="10em" width="10em"/>
    </div>
}

export default Offline