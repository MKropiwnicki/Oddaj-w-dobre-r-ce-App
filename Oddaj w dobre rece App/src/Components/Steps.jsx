import React from "react";
import {Decal} from "./Decal.jsx";
import {NavButton} from "./NavButton.jsx";
import TshirtIcon from '../assets/Icon-1.svg'
import BagIcon from '../assets/Icon-2.svg'
import SearchIcon from '../assets/Icon-3.svg'
import ArrowsIcon from '../assets/Icon-4.svg'
import {StepsTile} from "./StepsTile.jsx";
import {useNavigate} from "react-router-dom";

export const Steps = () => {

    const navigate = useNavigate();

    const handleDonationForm = () => {
        navigate('/oddaj-rzeczy')

    };

    return(
        <section className='steps' id='steps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <Decal/>
            <div className='steps-content'>
                <StepsTile icon={TshirtIcon} title='Wybierz rzeczy' content='ubrania, zabawki, sprzęt i  inne'/>
                <StepsTile icon={BagIcon} title='Spakuj je' content='skorzystaj z worków na śmieci'/>
                <StepsTile icon={SearchIcon} title='Zdecyduj komu chcesz pomóc' content='wybierz zaufane miejsce'/>
                <StepsTile icon={ArrowsIcon} title='Zamów kuriera' content='kurier przyjedzie w dogodnym terminie'/>
            </div>
            <NavButton navigate={handleDonationForm}
                       name='oddaj rzeczy'
                       classMod='btn bigBtn'/>
        </section>
    )
}