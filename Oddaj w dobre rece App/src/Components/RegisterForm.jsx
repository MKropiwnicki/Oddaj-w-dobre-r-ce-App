import React, {useEffect, useState} from "react";
import {SubmitButton} from "./SubmitButton.jsx";
import {UserAuth} from "../context/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase";
import {Decal} from "./Decal.jsx";
import {NavButton} from "./NavButton.jsx";


export const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [passwordsMatch, setPasswordsMatch] = useState(null);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState('');
    const {createUser} = UserAuth();

    const navigate = useNavigate();

    //tworzenie dokumentu dla usera, do którego tylko on będzie miał dostęp. Reguły dostępu zapisane są w firestore
    const createNewUserDocument = async (uid, email) => {
        const userData = {
            userId: uid,
            email,
        };

        try {
            await setDoc(doc(db, "users", uid), userData)
            return true
        } catch (e) {
            console.error("Error adding document: ", e);
            return false
        }
    };

    const handleRegister = async () => {
        setError('');

        let isRegOk = null;
        //aktualizacja stanu z async nie działała, musiałem użyć zmiennej let = isRegOk

        if(isEmailValid && isPasswordValid && passwordsMatch) {
            try{
                await createUser(email, password);
                const registrationSuccessful = await createNewUserDocument(auth.currentUser.uid, email);
                if (registrationSuccessful) {
                    // console.log(auth.currentUser.uid)
                    isRegOk = true;
                }
            } catch (e) {
                setError(e.message);
                console.log(error);
                isRegOk = false
            }
        } else {
            console.log('nie działa')
        }
        setEmail("");
        setPassword('');
        setPasswordConfirm('');

        isRegOk ? setSuccess(true) : setSuccess(false);

    }

    useEffect(() => {
        setIsEmailValid(emailValidation(email));
    }, [email]);

    useEffect(() => {
        setIsPasswordValid(passwordValidation(password));
    }, [password]);

    useEffect(() => {
        setPasswordsMatch(matchingPasswords(password, passwordConfirm));
    }, [passwordConfirm]);

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

    const matchingPasswords = () => {
        if(password === passwordConfirm) {
            return true
        } else {
            return false
        }
    }

    const handleLogin = () => {
        navigate('/logowanie')

    };


    return(
                <div className='register-box'>
                        <h2>Załóż konto</h2>
                        <Decal/>
                    {success && (
                        <p className='success'>
                            Rejestracja przebiegła pomyślnie!<br/>Teraz możesz się zalogować.
                        </p>
                    )}
                        <form>
                            <label htmlFor='email'>Email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email'/>
                            <label htmlFor='password'>Hasło:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password'/>
                            <label htmlFor='password-confirmation'>Powtórz hasło:</label>
                            <input onChange={(e) => setPasswordConfirm(e.target.value)} type='password' id='password-confirmation'/>
                            {isEmailValid === false && email !== '' && (
                                <p className='form-validation'>
                                    Wprowadzony email jest nieprawidłowy!
                                </p>
                            )}

                            {isPasswordValid === false && password !== '' && (
                                <p className='form-validation'>
                                    Hasło musi zawierać conajmniej 6 znaków!
                                </p>
                            )}

                            {passwordsMatch === false && passwordConfirm !== '' && (
                                <p className='form-validation'>
                                    Hasła nie są takie same!
                                </p>
                            )}
                        </form>
                    <div className='form-btns'>
                        <NavButton name='Zaloguj się' classMod='form-btn' navigate={handleLogin}/>
                        <SubmitButton name='Załóż konto' classMod='submit-btn'  submit={handleRegister}/>
                    </div>
                </div>
    )
}