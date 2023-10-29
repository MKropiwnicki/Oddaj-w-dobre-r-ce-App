import React from "react";
import {Decal} from "./Decal.jsx";
import {NavButton} from "./NavButton.jsx";
export const HeaderContent = () => {
    return(
        <div className='header-box'>
            <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <Decal/>
            <div className='buttons'>
                <NavButton name='oddaj rzeczy' classMod='btn bigBtn'/>
                <NavButton name='zorganizuj zbiórkę' classMod='btn bigBtn'/>
            </div>

        </div>

    )
}