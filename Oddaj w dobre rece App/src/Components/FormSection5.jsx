import React from "react";
import {NavButton} from "./NavButton.jsx";
import TshirtIcon from '../assets/Icon-1.svg'
import ArrowsIcon from '../assets/Icon-4.svg'
import {Bags} from "./Bags.jsx";
import {FormSubmitBtn} from "./FormSubmitBtn.jsx";
export const FormSection5 = ({ increment, decrement, handleChange, formData, handleFormSubmit, formVisibility, feedback}) => {

    return (
        <>
            <h2 className='form-summary-title'>Podsumowanie Twojej darowizny</h2>
            <h3 className='summary-text'>Oddajesz:</h3>
            <div className='summary-box'>
                <img src={TshirtIcon}/><p>{formData.bags} <Bags formData={formData}/>, {formData.donateType}, {formData.donationGroup}</p>
            </div>
            <div className='summary-box'>
                <img src={ArrowsIcon}/><p>dla lokalizacji: {formData.city}</p>
            </div>
            <div className='summary-container'>
                <div className='details-box'>
                    <h2>Adres odbioru:</h2>
                    <div><span>Ulica</span><p>{formData.pickupStreet}</p></div>
                    <div><span>Miasto</span><p>{formData.pickupCity}</p></div>
                    <div><span>Kod pocztowy</span><p>{formData.pickupPostal}</p></div>
                    <div><span>Numer telefonu</span><p>{formData.pickupPhone}</p></div>
                </div>
                <div className='details-box'>
                    <h2>Termin odbioru:</h2>
                    <div><span>Data</span><p>{formData.pickupDate}</p></div>
                    <div><span>Godzina</span><p>{formData.pickupTime}</p></div>
                    <div><span>Uwagi dla kuriera</span><p>{formData.pickupMessage}</p></div>
                </div>
            </div>
            <NavButton name='Wstecz'
                       classMod='form-btn'
                       navigate={decrement} />
            <FormSubmitBtn name='Potwierdzam'
                           classMod='form-btn form-btn-right'
                           handleFormSubmit={handleFormSubmit}
                           formVisibility={formVisibility}
                           feedback={feedback} />

        </>
    )
}