import React from "react";
import './Comments.css'

const Comments = (props) => {
    const numero1 = 2;
    const numero2 = 2;
    const formattedDate = props.date.toLocaleDateString();

    return (
    <div className="Comments">
        <h2>{props.name} </h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>Olá esse é o componente de comentários{somaNumeros(numero1, numero2)}</p>
        <p>{formattedDate}</p>
    </div>
    )
};

const somaNumeros = (primeiroNumero, segundoNumero) =>{
    return primeiroNumero + segundoNumero;
}

export default Comments;