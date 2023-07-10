import React from 'react'

import './User.css'

function User(props) {
  return (
    <div className="Usuario">
      <ul>
        <li><strong>ID:</strong> {props.user.id}</li>
        <li><strong>Nome:</strong> {props.user.name} {props.user.lastName}</li>
        <li><strong>Email:</strong> {props.user.email}</li>
      </ul>
      <button onClick={props.removeUser}>&times;</button>
    </div>
  )
}

export default User