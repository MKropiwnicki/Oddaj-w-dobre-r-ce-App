import React, {useState} from "react";
import { collection, doc, addDoc } from "firebase/firestore";
import {UserFormInfo} from "./UserFormInfo.jsx";
import {FormBody} from "./FormBody.jsx";
import {Decal} from "./Decal.jsx";
import {auth, db} from "../firebase.js";
import {NavButton} from "./NavButton.jsx";

export const DonateForm = () => {

    const [formPage, setFormPage] = useState(1);
    const [formVisibility, setFormVisibility] = useState(true);
    const [feedback, setFeedback] = useState(false);

    const [formData ,setFormData] = useState({
        donateType: '',
        bags: '',
        city: '',
        donationGroup: '',
        organization: '',
        pickupStreet: '',
        pickupCity: '',
        pickupPostal: '',
        pickupPhone: '',
        pickupDate: '',
        pickupTime: '',
        pickupMessage: ''
    })


    const pageIncrement = () => {
        if (formPage >= 1 && formPage <= 5) {
            setFormPage(prevState => prevState + 1)
            console.log(formPage);
            console.log(formData);
        }
    }
    const pageDecrement = () => {
        if (formPage >= 1 && formPage <= 5) {
            setFormPage(prevState => prevState - 1)
            console.log(formPage);
            console.log(formData);
        }
    }

    const handleChange = (e, value, name) => {

        console.log(value);

        if(name) {
            setFormData({
                ...formData,
                [name]: value,
            })
        } else if (e.target) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            })
        }

    }

    const resetForm = () => {
        setFormPage(1);
        setFeedback(false);
        setFormVisibility(true);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const filtersDonationsRef = collection(userDocRef, "donations");
        console.log(filtersDonationsRef);


        try {
            await addDoc(filtersDonationsRef, formData)
                setFormVisibility(false);
                setFeedback(true);
        } catch (error) {
            console.log(error)
        }

        setFormData({
            donateType: '',
            bags: '',
            city: '',
            donationGroup: '',
            organization: '',
            pickupStreet: '',
            pickupCity: '',
            pickupPostal: '',
            pickupPhone: '',
            pickupDate: '',
            pickupTime: '',
            pickupMessage: ''
        })
    }

    return(
        <section className='giveaway'>
            {formPage < 5 && (
                <div className='donate-info-bar'>
                    <UserFormInfo page={formPage} />
                </div>
            )}

            <div className='donate-form-container'>

                {formVisibility && (
                    <form>
                        <FormBody page={formPage} increment={pageIncrement} decrement={pageDecrement} handleChange={handleChange} formData={formData} handleFormSubmit={handleFormSubmit} formVisibility={setFormVisibility} feedback={setFeedback}/>
                    </form>
                )}

                {feedback && (
                    <div className='feedback'>
                        <h2>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                        <Decal/>
                        <NavButton navigate={resetForm} name='Oddaj rzeczy' classMod='reset-btn'/>
                    </div>
                )}
            </div>
        </section>
    )
}