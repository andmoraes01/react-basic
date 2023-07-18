import React from "react";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";

import './Comments.css';


const Comments = (props) => {
    return (
        <div className="Comments">
            <div className="card">
                <h2 className="name">{props.name} </h2>
                <p className="email">{props.email}</p>
                <p className="mensage">{props.children}</p>
                <p className="date">{formatRelative(props.date, new Date(), { locale: ptBR })}</p>
                <button onClick={props.onRemove}>&times;</button>
            </div>
        </div>
    )
};

export default Comments;