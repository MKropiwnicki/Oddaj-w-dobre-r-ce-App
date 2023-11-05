import React from "react";
import {Decal} from "./Decal.jsx";
import {Square} from "./Square.jsx";

export const DonateHeaderContent = () => {

    return(
        <div className='header-box'>
            <h1>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>
            <Decal/>
            <h2>Wystarczą 4 proste kroki:</h2>
            <div className='squares'>
                <Square number='1' step='Wybierz rzeczy' classMod='square' />
                <Square number='2' step='Spakuj je w worki' classMod='square' />
                <Square number='3' step='Wybierz fundację' classMod='square' />
                <Square number='4' step='Zamów kuriera' classMod='square' />
            </div>
        </div>
    )
}