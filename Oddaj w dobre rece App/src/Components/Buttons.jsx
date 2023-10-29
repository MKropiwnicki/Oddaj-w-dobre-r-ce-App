import React from "react";
import {NavButton} from "./NavButton.jsx";

export const Buttons = () => {
    return(
        <div className='first-nav'>
            <NavButton name='Zaloguj' classMod='btn'/>
            <NavButton name='Załóż konto' classMod='btn register'/>
        </div>
    )
}