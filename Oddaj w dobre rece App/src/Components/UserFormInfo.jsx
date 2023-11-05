import React from "react";

export const UserFormInfo = ({page}) => {


    let info;
    if(page === 1) {
        info =   <>
            <h2>Ważne!</h2>
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </>
    } else if (page === 2) {
        info =    <>
            <h2>Ważne!</h2>
            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a>TUTAJ</a>.</p>
        </>
    } else if (page === 3) {
        info =    <>
            <h2>Ważne!</h2>
            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        </>
    } else if (page === 4) {
        info =    <>
            <h2>Ważne!</h2>
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
        </>
    } else if (page === 5) {
        info =    <>
            <h2>Ważne!</h2>
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
        </>
    }

    return info
}