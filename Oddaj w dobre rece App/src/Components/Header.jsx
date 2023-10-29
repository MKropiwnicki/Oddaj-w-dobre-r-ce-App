import React from "react";
import heroImage from '../assets/Home-Hero-Image.jpg'
import {Buttons} from "./Buttons.jsx";
import {Navigation} from "./Navigation.jsx";
import {HeaderContent} from "./HeaderContent.jsx";

export const Header = () => {
    return(
        <div className='header-container'>
            <div className='header-img'>
                <img src={heroImage}  alt='box of items'/>
            </div>
            <div className='header-content'>
                <Buttons />
                <Navigation />
                <HeaderContent />
            </div>
            <div className='spacer'></div>
        </div>
    )
}