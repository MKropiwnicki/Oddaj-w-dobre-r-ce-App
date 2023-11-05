import React from "react";

export const NavButton = ({name, classMod, navigate}) => {
    return(
        <button onClick={navigate} className={classMod}>{name}</button>
    )
}