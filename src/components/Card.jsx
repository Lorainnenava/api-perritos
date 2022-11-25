import React from 'react'
import './estilos.css'

    export const Card = ({url}) => {
    return (
        <div className="card">
            <img src={url} />
            <div className="texto">
                {" "}
                <h1>ADOPTA UN PERRO</h1>
                <br/>
                <p>TOTALMENTE GRATIS</p>
            </div>
        </div>
    );
    };
    

    export default Card;
