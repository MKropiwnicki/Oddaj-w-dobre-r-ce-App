import React from "react";
export const InfoTile = ({stats, title}) => {
    return(
        <div className='info'>
            <h2>{stats}</h2>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore eveniet facere officia omnis perspiciatis quis quisquam rem!</p>
        </div>
    )
}