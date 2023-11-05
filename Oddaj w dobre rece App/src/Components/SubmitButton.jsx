import React from "react";

export const SubmitButton = ({name, classMod, submit}) => {
    return(
        <button onClick={(e) => submit(e)} className={classMod}>{name}</button>
    )
}