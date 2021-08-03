import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, question, choices, published_at, image_url, cardIndex, toggleDialog}) => {
    
    if(!id) return (
        <div className="card">
            <div className="question">
                <strong>Cannot Retrieve Info</strong>
            </div>
        </div>
    )

    const handleShare = () => {
        window.open('mailto:test@example.com');
    }

    return (
            <div className="card" onClick={() => window.location.href = '/questions/'+id}>
                <div class="question">
                    <img src={image_url} alt="Question Image" />
                    <strong>{cardIndex}.</strong>{question}
                </div>
                <div className="choices">
                    <ul>
                        {choices.map((c, i) => <li key={i}>{c.choice} <strong>{c.votes}</strong></li>)}
                    </ul>
                </div>
                <div className="footer">
                    <button className="myButton" onClick={(e) => {
                        e.stopPropagation()
                        toggleDialog(id)
                    }}>share</button><time>{published_at}</time>
                </div>
            </div>
    )
}

export default Card;