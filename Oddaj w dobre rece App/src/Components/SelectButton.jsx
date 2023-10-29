import React from "react";

export const SelectButton = ({name, classMod, option, value}) => {
    return(
        <button onClick={() => option(value) } className={classMod}>{name}</button>
    )
}