import React, { useState } from 'react'
import './AddUser.css'


function AddUser() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');


  const onSubmitHandler = event => {
    event.preventDefault();
    const user = { name, lastName, email };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.ok) {
          resetUserData();
          //criar componente de alerta um componente separado e personalizado
          alert('Usuário cadastrado com sucesso !');      
        }
      })
  }

  const resetUserData = () => {
    setName('')
    setLastName('')
    setEmail('')
  }

  return (
    <div className="AddUser">
      <h2>Adicionar Usuário</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Line">
          <div className="Column">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
              required>
            </input>
          </div>
          <div className="Column">
            <label>Sobrenome</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Line">
          <div className="Column">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default AddUser