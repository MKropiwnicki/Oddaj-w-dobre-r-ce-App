import React from "react";
import {Decal} from "./Decal.jsx";
import {NavButton} from "./NavButton.jsx";
import { useNavigate } from 'react-router-dom';
export const HeaderContent = () => {

    const navigate = useNavigate();

    const handleDonationForm = () => {
        navigate('/oddaj-rzeczy')

    };



    return(
        <div className='header-box'>
            <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <Decal/>
            <div className='buttons'>
                <NavButton navigate={handleDonationForm}
                           name='oddaj rzeczy'
                           classMod='btn bigBtn'/>
                <NavButton name='zorganizuj zbiórkę' classMod='btn bigBtn'/>
            </div>

        </div>

    )
}