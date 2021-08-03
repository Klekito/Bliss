import React, { useState } from 'react';
import { shareQuestion } from '../api/share';

const ShareDialog = ({questionNumber, open, handleClose}) => {
    
    

    if(!open) return null

    const handleSubmit = (e) => {
        const email = e.target[0].value;
        const questionURL = window.location.host+'/questions/'+questionNumber;
        shareQuestion(email, questionURL).then(
            res => alert('Email Sent')
        )
    }
 
    return <div className="background-dialog" onClick={ () => handleClose()}>
        <div className="dialog" onClick={ (e ) => {
            e.stopPropagation()
        } }>
            <p>You are sharing the {questionNumber}# question with</p>
            <form onSubmit={(e ) => {
                e.preventDefault()
                handleSubmit(e)
            }}>
                <input type="email" placeholder="email" />
                <br></br>
                <button className="myButton" type="submit">Share</button>
            </form>
        </div>
    </div>

}

export default ShareDialog