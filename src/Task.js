import React from "react";
import ReactTooltip from 'react-tooltip';

export default function Task () {

    const text = "rajabishek@hotmail.com | Copy | New email"
    return(
        <div className="container">
            <div className="App">
                Sign Up
            </div>
            <div className="draw"></div>
            <div className="contaiiner">
                <i className="fa fa-google" aria-hidden="true"></i> Continue with Google
            </div>
            <div className="box">
                <p className="up">Email Address <br/> 
                    <ReactTooltip effect="solid"/> 
                    <div>
                        <span className="clr"  data-tip={text} > 
                            rajabishek@hotmail.com 
                        </span>
                    </div>
                </p>
            </div>
            <div className="boxx">
                <i className="fa fa-info-circle"></i>
                <p className="dwon"> Please check your email  <br/> 
                <span className="clrr">We’ve sent a temporary authorization code to rajabisek@hotmail.com. It may take a few minutes to arrive.</span></p>
            </div>
            <div className="boxxx">
                <p className="lines"> <span className="line"> | </span> Please paste authorization code </p>
            </div>
            <div className="boxxxx">
                <p className="log">Log In</p>
            </div>
        </div> 
    ) 
}
