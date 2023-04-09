import './RouterRM.css';
import React from 'react';
import play from './playo.png'
import { useNavigate } from 'react-router-dom';

function RouterRM(props) {
    let history = useNavigate();
    function Redirection() {
        
        let url = "about.html";
        history(url);
    }

    return (
        <div className="RouterRM">
            <img className="button_bar" src={play} alt="play music" onClick={Redirection} />
            
        </div>
    );
}

export default RouterRM;
