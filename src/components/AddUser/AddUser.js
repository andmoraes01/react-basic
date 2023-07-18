import React, { useState } from 'react'
import User from '../User/User';
import './AddUser.css'


function AddUser() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

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
          return response.json();
        }
      })
      .then(data => {        
        setUsers(prevUsers => [...prevUsers, data]); 
        alert('Usuário cadastrado com sucesso!');
      })
      .catch(error => console.log(error));
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
      
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}

    </div>
  )
}

export default AddUser