import React from "react";
import {Contact} from "./Contact.jsx";
import {DonateForm} from "./DonateForm.jsx";
import {DonateHeader} from "./DonateHeader.jsx";

export const LoggedMain = () => {
    return(
        <>
            <DonateHeader />
            <DonateForm/>
            <Contact/>
        </>
    )
}