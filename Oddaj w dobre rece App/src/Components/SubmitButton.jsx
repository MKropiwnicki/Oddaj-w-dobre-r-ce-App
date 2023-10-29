import React from "react";

export const SubmitButton = ({name, classMod, submit}) => {
    return(
        <button onClick={() => submit()} className={classMod}>{name}</button>
    )
}