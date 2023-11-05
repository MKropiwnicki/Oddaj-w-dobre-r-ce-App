import React from "react";
import {NavButton} from "./NavButton.jsx";

export const FormSection4 = ({ increment, decrement, handleChange}) => {


    return (
        <>
            <h2 className='form-step'>Krok 4/4</h2>
            <fieldset>
                <legend>Podaj adres oraz termin odbioru rzecz przez kuriera</legend>
                <div className='shipment-container'>
                    <div className='shipment-box'>
                        <h2>Adres odbioru:</h2>
                        <div>
                            <label htmlFor='street'>Ulica</label>
                            <input onChange={handleChange} type='text' name='pickupStreet' id='street'/>
                            <label htmlFor='city'>Miasto</label>
                            <input onChange={handleChange} type='text' name='pickupCity' id='city'/>
                            <label htmlFor='postal'>Kod pocztowy</label>
                            <input onChange={handleChange} type='text' name='pickupPostal' id='postal'/>
                            <label htmlFor='phone'>Numer telefonu</label>
                            <input onChange={handleChange} type='text' name='pickupPhone' id='phone'/>
                        </div>

                    </div>
                    <div className='shipment-box'>
                        <h2>Termin odbioru:</h2>
                        <div>
                            <label htmlFor='date'>Data</label>
                            <input onChange={handleChange} type='date' name='pickupDate' id='date'/>
                            <label htmlFor='time'>Godzina</label>
                            <input onChange={handleChange} type='time' name='pickupTime' id='time'/>
                            <label htmlFor='message'>Uwagi dla kuriera</label>
                            <textarea className='shipment-message' onChange={handleChange} name='pickupMessage' id='message'/>
                        </div>

                    </div>
                </div>
            </fieldset>
            <NavButton name='Wstecz' classMod='form-btn' navigate={decrement} />
            <NavButton name='Dalej' classMod='form-btn form-btn-right' navigate={increment} onClick={(e) => handleChange(e, targets, 'donationGroup')} />
        </>
    )
}