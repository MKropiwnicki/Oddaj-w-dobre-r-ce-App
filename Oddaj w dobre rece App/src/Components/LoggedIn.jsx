import React from "react";
import {Header} from "./Header.jsx";
import {Stats} from "./Stats.jsx";
import {Steps} from "./Steps.jsx";
import {About} from "./About.jsx";
import {Partners} from "./Partners.jsx";
import {Contact} from "./Contact.jsx";
import {LoggedHeader} from "./LoggedHeader.jsx";

export const LoggedIn = () => {
    return(
        <>
            <LoggedHeader />
            <Stats/>
            <Steps />
            <About/>
            <Partners/>
            <Contact/>
        </>
    )
}