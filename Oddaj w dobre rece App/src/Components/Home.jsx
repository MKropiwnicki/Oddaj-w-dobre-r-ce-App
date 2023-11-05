import React from "react";
import {Header} from "./Header.jsx";
import {Stats} from "./Stats.jsx";
import {Steps} from "./Steps.jsx";
import {About} from "./About.jsx";
import {Partners} from "./Partners.jsx";
import {Contact} from "./Contact.jsx";

export const Home = () => {
    return(
        <>
            <Header />
            <Stats/>
            <Steps />
            <About/>
            <Partners/>
            <Contact/>
        </>
    )
}