import React from "react";

export const SubmitButton = ({name, classMod, submit}) => {
    return(
        <button type='submit' onClick={(e) => submit } className={classMod}>{name}</button>
    )
}