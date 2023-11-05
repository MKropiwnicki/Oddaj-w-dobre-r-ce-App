import React from "react";
import { useNavigate } from 'react-router-dom';
import {NavButton} from "./NavButton.jsx";
import {UserAuth} from "../context/AuthContext.jsx";

export const LoggedInButtons = () => {

    const navigate = useNavigate();
    const { user, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/wylogowanie');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleDonationForm = () => {
        navigate('/oddaj-rzeczy')

    };

    return(
        <div className='first-nav'>
            <h2>Cześć {user.email}</h2>
            <NavButton navigate={handleDonationForm}
                       name='Oddaj rzeczy'
                       classMod='btn'/>
            <NavButton navigate={handleLogout}
                          name='Wyloguj'
                          classMod='btn logout'/>
        </div>
    )
}