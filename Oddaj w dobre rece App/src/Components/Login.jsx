import React from "react";
import {Buttons} from "./Buttons.jsx";
import {Navigation} from "./Navigation.jsx";
import {LoginForm} from "./LoginForm.jsx";

export const Login = () => {
    return(
        <div className='register-container'>
            <div className='register-img'>

            </div>
            <div className='register-content'>
                <Buttons />
                <Navigation />
            </div>
            <LoginForm />
            <div className='spacer'></div>
        </div>
    )
}