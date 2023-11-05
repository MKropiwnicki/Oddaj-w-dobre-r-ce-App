import React from "react";
import {FormSection1} from "./FormSection1.jsx";
import {FormSection2} from "./FormSection2.jsx";
import {FormSection3} from "./FormSection3.jsx";
import {FormSection4} from "./FormSection4.jsx";
import {FormSection5} from "./FormSection5.jsx";

export const FormBody = ({page, increment, decrement, handleChange, formData, handleFormSubmit, formVisibility, feedback}) => {


    let section;
    if(page === 1) {
        section = <FormSection1
            increment={increment}
            handleChange={handleChange} />
    } else if (page === 2) {
        section = <FormSection2
            increment={increment}
            decrement={decrement}
            handleChange={handleChange} />
    } else if (page === 3) {
           section = <FormSection3
               increment={increment}
               decrement={decrement}
               handleChange={handleChange} />
    } else if (page === 4) {
        section = <FormSection4
            increment={increment}
            decrement={decrement}
            handleChange={handleChange} />
    } else if (page === 5) {
        section = <FormSection5
            increment={increment}
            decrement={decrement}
            handleChange={handleChange}
            formData={formData}
            handleFormSubmit={handleFormSubmit}
            formVisibility={formVisibility}
            feedback={feedback} />
    }

    return section
}