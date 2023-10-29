import React from "react";
import { useNavigate } from 'react-router-dom';
import {NavButton} from "./NavButton.jsx";

export const Buttons = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/rejestracja')
    }

    const handleLogin = () => {
        navigate('/logowanie')

    };

    return(
        <div className='first-nav'>
            <NavButton navigate={handleLogin} name='Zaloguj' classMod='btn'/>
            <NavButton navigate={handleRegister} name='Załóż konto' classMod='btn register'/>
        </div>
    )
}