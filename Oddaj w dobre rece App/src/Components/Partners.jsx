import React, {useState} from "react";
import {Decal} from "./Decal.jsx";
import {SelectButton} from "./SelectButton.jsx";

export const Partners = () => {
    const [partner, setPartner] = useState('Fundacje');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const partnersData = {
        Fundacje: [
            {type: 'Fundacja', name: 'Lorem ipsum 1', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 2', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 3', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 4', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 5', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 6', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 7', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 8', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Fundacja', name: 'Lorem ipsum 9', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' }
        ],
        Organizacje: [
            {type: 'Organizacja', name: 'Lorem ipsum 1', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Organizacja', name: 'Lorem ipsum 2', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Organizacja', name: 'Lorem ipsum 3', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Organizacja', name: 'Lorem ipsum 4', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Organizacja', name: 'Lorem ipsum 5', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Organizacja', name: 'Lorem ipsum 6', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' }

        ],
        Zbiórki: [
            {type: 'Zbiórka', name: 'Lorem ipsum 1', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Zbiórka', name: 'Lorem ipsum 2', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' },
            {type: 'Zbiórka', name: 'Lorem ipsum 3', description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.', data: 'Ut, aliquam, purus, sit, amet' }

        ]
    }

    const dataToDisplay = partnersData[partner];
    const totalPages = Math.ceil(dataToDisplay.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = dataToDisplay.slice(startIndex, endIndex);

    const handlePartner = (option) => {
        setPartner(option);
        setCurrentPage(1);
    };

    const handlePage = (page) => {
        setCurrentPage(page)
    }

    return(
        <section className='partners' id='partners'>
            <div className='partners-content'>
                <h2>Komu pomagamy?</h2>
                <Decal/>
                <div className='buttons'>
                    <SelectButton option={handlePartner} value='Fundacje' name='Fundacjom' classMod='btn partnersBtn'/>
                    <SelectButton option={handlePartner} value='Organizacje' name='Organizacjom pozarządowym' classMod='btn partnersBtn'/>
                    <SelectButton option={handlePartner} value='Zbiórki' name='Lokalnym zbiórkom' classMod='btn partnersBtn'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className='partners-list'>
                    {visibleData.map((item, index) => (
                        <div key={index} className='partner-container'>
                            <div className='partner-info'>
                                <h3>{item.type} "{item.name}"</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className='partner-data'>
                                <p>{item.data}</p>
                            </div>
                        </div>
                    ))}
                    <div className='page-counter'>
                        <ul>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i}>
                                    <button onClick={() => handlePage(i + 1)}>{i + 1}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}