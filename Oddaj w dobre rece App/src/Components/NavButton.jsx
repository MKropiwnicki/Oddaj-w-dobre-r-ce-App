import React from "react";

export const NavButton = ({name, classMod}) => {
    return(
        <button className={classMod}>{name}</button>
    )
}