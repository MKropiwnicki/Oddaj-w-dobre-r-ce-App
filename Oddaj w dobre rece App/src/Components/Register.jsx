import React from "react";
import {Buttons} from "./Buttons.jsx";
import {Navigation} from "./Navigation.jsx";
import {RegisterForm} from "./RegisterForm.jsx";

export const Register = () => {
    return(
        <div className='register-container'>
            <div className='register-img'>

            </div>
            <div className='register-content'>
                <Buttons />
                <Navigation />
            </div>
            <RegisterForm />
            <div className='spacer'></div>
        </div>
    )
}