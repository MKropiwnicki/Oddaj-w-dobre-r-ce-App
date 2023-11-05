import React from "react";

export const FormSubmitBtn = ({name, classMod, handleFormSubmit, formVisibility, feedback}) => {
    return(
        <button onClick={(e) => {handleFormSubmit(e); formVisibility(false); feedback(true)}} className={classMod}>{name}</button>
    )
}