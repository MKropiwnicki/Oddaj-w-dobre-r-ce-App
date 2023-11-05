import React, {useState} from "react";
import {NavButton} from "./NavButton.jsx";
import ArrowDown from '../assets/Icon-Arrow-Down.svg'
import ArrowUp from "../assets/Icon-Arrow-Up.svg"
export const FormSection2 = ({ increment, decrement, handleChange}) => {

    const [arrowDirection, setArrowDirection] = useState(true);
    const [list, setList] =useState(false);

    const handleArrow = () => {
        setArrowDirection(!arrowDirection);
    }

    const toggleList = () => {
        setList(!list)
    }

    const optionList = ['1', '2', '3', '4', '5']

    return (
        <>
            <h2 className='form-step'>Krok 2/4</h2>
            <fieldset>
                <legend>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</legend>
                <div className='bag-select-container select-container'>
                    <h2 className='selectLabel'>Liczba 60l worków:</h2>
                    <div className='select'
                         style={arrowDirection ? {backgroundImage: `url(${ArrowDown})`} : {backgroundImage: `url(${ArrowUp})`}}
                         onClick={() => {toggleList(); handleArrow()}}>— wybierz —</div>

                    {list && (
                        <ul className='option'>
                            {optionList.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        toggleList();
                                        handleArrow();
                                        handleChange(e, option, 'bags');
                                    }}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </fieldset>
            <NavButton name='Wstecz' classMod='form-btn' navigate={decrement} />
            <NavButton name='Dalej' classMod='form-btn form-btn-right' navigate={increment} />
        </>
    )
}