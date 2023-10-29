import React from "react";
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {

    const navigate = useNavigate();

    const handleNavHome = () => {
        navigate('/')
    }

    return(
        <nav className='navigation'>
            <ul>
                <li><a onClick={handleNavHome} href='#'>Start</a></li>
                <li><a href='#steps'>O co chodzi?</a></li>
                <li><a href='#about'>O nas</a></li>
                <li><a href='#partners'>Fundacja i organizacje</a></li>
                <li><a href='#contact'>Kontakt</a></li>

            </ul>
        </nav>

    )
}