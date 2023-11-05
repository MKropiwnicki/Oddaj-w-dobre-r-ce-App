import React, {useEffect, useState} from "react";
import {Decal} from "./Decal.jsx";
import {SubmitButton} from "./SubmitButton.jsx";
import {Footer} from "./Footer.jsx";
export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isMessageValid, setIsMessageValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const messageAPI = 'https://fer-api.coderslab.pl/v1/portfolio/contact'

    const userMessage = {
        name: name,
        email: email,
        message: message
    }


    const handleContact = () => {
        setError('');

        if (isEmailValid && isNameValid && isMessageValid) {
            fetch(messageAPI, {
                method: "POST",
                body: JSON.stringify(userMessage),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json();
                    } else {
                        console.log(response)
                        throw new Error('Błąd przy wysyłaniu wiadomości');
                    }
                })
                .then(data => {
                    console.log(data);
                    setSuccess(true);
                    setEmail('');
                    setMessage('');
                    setName('');
                })
                .catch(err => {
                    setError(err.message);
                    console.log(error);
                    setSuccess(false);
                });
        }
    }

    useEffect(() => {
        setIsEmailValid(emailValidation(email));
    }, [email]);

    useEffect(() => {
        setIsNameValid(nameValidation(name));
    }, [name]);

    useEffect(() => {
        setIsMessageValid(messageValidation(message));
    }, [message]);

    const emailValidation = () => {
        const atPresent = /[@]/;

        if(atPresent.test(email) && email.length > 5) {
            return true
        } else {
            return false
        }
    }

    const nameValidation = () => {

        const spacePresent = /\s/;

        if(!spacePresent.test(name)) {
            return true
        } else {
            return false
        }
    }

    const messageValidation = () => {
        if(message.length >= 120) {
            return true
        } else {
            return false
        }
    }


    return (
    <section className='contact' id='contact'>
        <div className='form-container'>
            <h2>Skontaktuj się z nami</h2>
            <Decal/>
            {success && (
                <p className='success'>
                    Wiadomość została wysłana! <br/> Wkrótce sie skontaktujemy.
                </p>
            )}
            <div>
                <form className='form'>
                    <div className='form-data'>
                        <div>
                            <label htmlFor='name'>Wpisz swoje imię:</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type='text' id='name' placeholder='Mateusz'/>
                            {isNameValid === false && (
                                <p className='form-validation'>
                                    Podane imię jest nieprawidłowe!
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor='email'>Wpisz swój email:</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' placeholder='abc@xyz.pl'/>
                            {isEmailValid === false && email !== '' && (
                                <p className='form-validation'>
                                    Podany email jest nieprawidłowy!
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='form-info'>
                        <label htmlFor='info'>Wpisz swoją wiadomość:</label>
                        <textarea id='info' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        {isMessageValid === false && message !== '' && (
                            <p className='form-validation'>
                                Wiadomość musi zawierać conajmniej 120 znaków!
                            </p>
                        )}
                    </div>
                    <SubmitButton submit={handleContact} name='Wyślij' classMod='submit-btn'/>
                </form>
            </div>
        </div>
        <Footer/>
    </section>
)

}