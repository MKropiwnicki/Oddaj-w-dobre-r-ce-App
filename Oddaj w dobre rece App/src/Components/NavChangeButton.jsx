import React from "react";

export const NavChangeButton = ({name, classMod, navigate, handleChange, targets, keyName}) => {
    return(
        <button onClick={(e) => {navigate(); handleChange(e, targets, keyName)}} className={classMod}>{name}</button>
    )
}