import React from "react";

export const StepsTile = ({icon, title, content}) => {
    return(
        <div className='steps-tile'>
            <img src={icon}/>
            <h2>{title}</h2>
            <div className='divider'></div>
            <p>{content}</p>
        </div>
    )
}