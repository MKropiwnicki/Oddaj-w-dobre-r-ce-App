import React from "react";

export const Square = ({number, classMod, step}) => {
    return(
        <div className={classMod}>
            <h2>{number}</h2>
            <p>{step}</p>
        </div>
    )
}