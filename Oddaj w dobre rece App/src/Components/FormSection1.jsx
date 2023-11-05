import React from "react";
import {NavButton} from "./NavButton.jsx";

export const FormSection1 = ({ increment, handleChange}) => {

    return (
        <>
        <h2 className='form-step'>Krok 1/4</h2>
        <fieldset>
            <legend>Zaznacz co chesz oddać:</legend>
            <label className='radio'>
                <input type="radio" name="donateType" value="ubrania, które nadają się do ponownego użycia" onChange={handleChange}/>
                <span></span>
                ubrania, które nadają się do ponownego użycia
            </label>
            <label className='radio'>
                <input  type="radio" name="donateType" value="ubrania, do wyrzucenia" onChange={handleChange}/>
                <span></span>
                ubrania, do wyrzucenia
            </label>
            <label className='radio'>
                <input type="radio" name="donateType" value="zabawki" onChange={handleChange}/>
                <span></span>
                zabawki
            </label>
            <label className='radio'>
                <input  type="radio" name="donateType" value="książki" onChange={handleChange}/>
                <span></span>
                książki
            </label>
            <label className='radio'>
                <input type="radio" name="donateType" value="inne" onChange={handleChange}/>
                <span></span>
                inne
            </label>
        </fieldset>
            <NavButton name='Dalej' classMod='form-btn' navigate={increment} />
        </>
    )
}