import React from "react";
import heroImage from '../assets/Home-Hero-Image.jpg'
import {Navigation} from "./Navigation.jsx";
import {HeaderContent} from "./HeaderContent.jsx";
import {LoggedInButtons} from "./LoggedInButtons.jsx";

export const LoggedHeader = () => {
    return(
        <div className='header-container'>
            <div className='header-img'>
                <img src={heroImage}  alt='box of items'/>
            </div>
            <div className='header-content'>
                <LoggedInButtons />
                <Navigation />
                <HeaderContent />
            </div>
            <div className='spacer'></div>
        </div>
    )
}