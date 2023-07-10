import React from 'react'

import './User.css'

function User(props) {
  return (
    <div className="Usuario">
      <ul>
        <li><strong>ID:</strong> {props.usuario.id}</li>
        <li><strong>Nome:</strong> {props.usuario.nome} {props.usuario.sobrenome}</li>
        <li><strong>Email:</strong> {props.usuario.email}</li>
      </ul>
      <button onClick={props.removerUsuario}>&times;</button>
    </div>
  )
}

export default User