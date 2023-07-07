import React from "react";
import './Comments.css';

const Comments = (props) => {
    const formattedDate = props.date.toLocaleDateString();

    return (
    <div className="Comments">              
        <div className="card">
            <h2 className="name">{props.name} </h2>
            <p className="email">{props.email}</p>
            <p className="mensage">{props.children}</p>           
            <p className="date">{formattedDate}</p>        
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>    
    )
};

export default Comments;