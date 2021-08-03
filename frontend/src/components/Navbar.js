import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return <div className="navbar">
        <div className="logo">Logo</div>
        <ul className="link-container">
            <li><Link className={`link`} to="/questions">Questions</Link></li>
            <li><Link className={`link`} to="/offline">Offline</Link></li>
        </ul>
    </div>
}

export default Navbar