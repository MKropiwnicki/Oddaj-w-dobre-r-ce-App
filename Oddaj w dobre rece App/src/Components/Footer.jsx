import React from "react";
import FacebookIcon from '../assets/Facebook.svg'
import InstagamIcon from '../assets/Instagram.svg'

export const Footer = () => {

    return (
        <footer>
            <h2 className='copyright'>Copyright by Coders Lab</h2>
            <div className='icons'>
                <img src={FacebookIcon}/>
                <img src={InstagamIcon}/>
            </div>
        </footer>
    )

}