import React, {useEffect, useState} from "react";
import {SubmitButton} from "./SubmitButton.jsx";
import {UserAuth} from "../context/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';
import {Decal} from "./Decal.jsx";
import {NavButton} from "./NavButton.jsx";


export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [noUser, setNoUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = UserAuth();

    const handleLogin = async () => {
        setError('');

        let isLogOk = true;

        try {
            await login(email, password)
            navigate('/zalogowano')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            isLogOk = false
        }
        setEmail("");
        setPassword('');

        if(isLogOk === false) {
            setNoUser(true);
        }

    }

    useEffect(() => {
        setIsEmailValid(emailValidation(email));
    }, [email]);

    useEffect(() => {
        setIsPasswordValid(passwordValidation(password));
    }, [password]);


    const emailValidation = () => {
        const atPresent = /[@]/;

        if(atPresent.test(email) && email.length > 5) {
            return true
        } else {
            return false
        }
    }

    const passwordValidation = () => {

        if(password.length >= 6) {
            return true
        } else {
            return false
        }
    }

    const handleNavRegister = () => {
        navigate('/rejestracja')

    };


    return(
        <div className='login-box'>
            <h2>Zaloguj się</h2>
            <Decal/>
            {noUser && (
                <p className='login-validation'>
                    Nieprawidowe dane logowania!
                </p>
            )}
            <form>
                <label htmlFor='email'>Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} type='email' id='email'/>
                {isEmailValid === false && email !== '' && (
                    <p className='login-form-validation'>
                        Wprowadzony email jest nieprawidłowy!
                    </p>
                )}
                <label htmlFor='password'>Hasło:</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' id='password'/>
                {isPasswordValid === false && password !== '' && (
                    <p className='login-form-validation'>
                        Podane hasło jest za krótkie!
                    </p>
                )}

            </form>
            <div className='form-btns'>
                <NavButton name='Załóż konto' classMod='form-btn' navigate={handleNavRegister}/>
                <SubmitButton name='Zaloguj się' classMod='submit-btn'  submit={handleLogin}/>
            </div>

        </div>


    )
}