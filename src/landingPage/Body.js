import React from 'react';
import "./Body.css";
import Header from "./Header";

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
        <div className="body_info">
            <img 
                src="" 
                alt="" 
            />
            <div className="body_infoText">
                
            </div>
        </div>
    )
}

export default Body;
