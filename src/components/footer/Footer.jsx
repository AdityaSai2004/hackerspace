import React from 'react';
import './Footer.css';
import backwardIcon from './Vector 522.png'; // Replace with the actual path to your backward icon image
import forwardIcon from './Vector 521.png'; // Replace with the actual path to your forward icon image
import { Link } from 'react-router-dom'
 
const Footer = (props) => {

    return (
        <div className="container">
            <div className="nav_button">
                
                <Link to={`${props.urlb}`} className="nav_backwardButton">
                
                    <img src={backwardIcon} alt="Backward Icon" className="navbar_buttonIconback" />
                
                </Link>

                <Link to={`${props.urlf}`} className="nav_forwardButton">
                
                    <img src={forwardIcon} alt="Forward Icon" className="navbar_buttonIconforward" />
                
                </Link>

            </div>
        </div>
    )
}

export default Footer;
