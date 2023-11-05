import React, {useEffect, useState} from "react";
import {NavButton} from "./NavButton.jsx";
import {NavChangeButton} from "./NavChangeButton.jsx";
import ArrowDown from "../assets/Icon-Arrow-Down.svg";
import ArrowUp from "../assets/Icon-Arrow-Up.svg";

export const FormSection3 = ({ increment, decrement, handleChange}) => {

    const [arrowDirection, setArrowDirection] = useState(true);
    const [donateTargets, setDonateTargets] = useState([]);
    const [list, setList] = useState(false);


    const handleArrow = () => {
        setArrowDirection(!arrowDirection);
    }

    const toggleList = () => {
        setList(!list)
    }

    const handleCheckbox = (value) => {
        const newDonateTargets = [...donateTargets];
        newDonateTargets.push(value);
        setDonateTargets(newDonateTargets);

    }

    const targets = donateTargets.join(', ')

    useEffect(() => {
        console.log(targets)
    }, [donateTargets])


    const cityList = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']

    return (
        <>
            <h2 className='form-step'>Krok 3/4</h2>
            <fieldset>
                <legend>Lokalizacja:</legend>
                <div className='select-container'>
                    <div className='city-select'
                         style={arrowDirection ? {backgroundImage: `url(${ArrowDown})`} : {backgroundImage: `url(${ArrowUp})`}}
                         onClick={() => {
                             toggleList();
                             handleArrow()
                         }}>— wybierz —
                    </div>

                    {list && (
                        <ul className='city'>
                            {cityList.map((city, index) => (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        toggleList();
                                        handleArrow();
                                        handleChange(e, city, 'city');
                                    }}
                                >
                                    {city}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='checkbox-container'>
                    <h2>Komu checesz pomóc?</h2>
                    <div className='wrapper'>
                        <label className='checkbox'>
                            <input type="checkbox" name="donationTarget" value="dzieciom"
                                   onChange={() => handleCheckbox('dzieciom')}/>
                            <span>dzieciom</span>

                        </label>
                        <label className='checkbox'>
                            <input type="checkbox" name="donationTarget" value="samotnym matkom"
                                   onChange={() => handleCheckbox('samotnym matkom')}/>
                            <span>samotnym matkom</span>

                        </label>
                        <label className='checkbox'>
                            <input type="checkbox" name="donationTarget" value="bezdomnym"
                                   onChange={() => handleCheckbox('bezdomnym')}/>
                            <span>bezdomnym</span>

                        </label>
                        <label className='checkbox'>
                            <input type="checkbox" name="donationTarget" value="niepełnosprawnym"
                                   onChange={() => handleCheckbox('niepełnosprawnym')}/>
                            <span>niepełnosprawnym</span>

                        </label>
                        <label className='checkbox'>
                            <input type="checkbox" name="donationTarget" value="osobom starszym"
                                   onChange={() => handleCheckbox('osobom starszym')}/>
                            <span>osobom starszym</span>

                        </label>
                    </div>

                </div>
                <div className='input-container'>
                    <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                    <input type="text" name="organization" onChange={handleChange}/>

                </div>

            </fieldset>
            <NavButton name='Wstecz' classMod='form-btn' navigate={decrement}/>
            <NavChangeButton name='Dalej' classMod='form-btn form-btn-right' navigate={increment} handleChange={handleChange}
                       targets={targets} keyName='donationGroup'/>
        </>
    )
}