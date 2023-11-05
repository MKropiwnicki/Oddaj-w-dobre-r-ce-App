import React from "react";
import {Buttons} from "./Buttons.jsx";
import {Navigation} from "./Navigation.jsx";
import { useNavigate } from 'react-router-dom';
import {Decal} from "./Decal.jsx";
import {NavButton} from "./NavButton.jsx";

export const LoggedOut = () => {


    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }

    return(
        <div className='register-container'>
            <div className='register-img'>

            </div>
            <div className='register-content'>
                <Buttons />
                <Navigation />
            </div>
            <div className='logout-box'>
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <Decal/>
                <NavButton navigate={goHome}
                           name='Strona główna'
                           classMod='btn'/>
            </div>
            <div className='spacer'></div>
        </div>
    )
}