import React from "react";
import {Decal} from "./Decal.jsx";
import Signature from '../assets/Signature.svg'
import People from '../assets/People.jpg'

export const About = () => {
    return(
        <section className='about' id='about'>
            <div className='about-content'>
                <h2>O nas</h2>
                <Decal/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='signature' src={Signature}/>
            </div>
            <div className='about-img'>
                <img src={People}/>
            </div>
        </section>
    )
}