import React from "react";
import FormHeroImage from '../assets/Form-Hero-Image.jpg'
import {Navigation} from "./Navigation.jsx";

import {LoggedInButtons} from "./LoggedInButtons.jsx";
import {DonateHeaderContent} from "./DonateHeaderContent.jsx";

export const DonateHeader = () => {
    return(
        <div className='header-container'>
            <div className='header-img'>
                <img src={FormHeroImage}  alt='scarf'/>
            </div>
            <div className='header-content'>
                <LoggedInButtons />
                <Navigation />
                <DonateHeaderContent />
            </div>
            <div className='spacer'></div>
        </div>
    )
}