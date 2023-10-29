import React from "react";
import {InfoTile} from "./InfoTile.jsx";

export const Stats = () => {
    return(
        <section className='stats'>
            <InfoTile stats='10' title='oddanych worków'/>
            <InfoTile stats='5' title='wspartych organizacji'/>
            <InfoTile stats='7' title='zorganizowanych zbiórek'/>
        </section>
    )
}