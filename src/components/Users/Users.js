import React, { useState, useEffect } from 'react'

import AddUser from '../AddUser/AddUser'
import User from '../User/User'

function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    //Implementando o método GET:
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(usersData => {
        const usersDataFormatedForMyStateFormat = usersData.data.map(userData => {
          return {
            id: userData.id,
            name: userData.first_name,
            lastName: userData.last_name,
            email: userData.email
          }
        })
        setUsers(usersDataFormatedForMyStateFormat)
      })
  }, [])

  const removeUser = user => {
    if (window.confirm(`Tem certeza que deseja remover "${user.name} ${user.lastName}"?`)) {
      fetch(`https://reqres.in/api/users/${user.id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            setUsers(users.filter(x => x.id !== user.id))
          }
        })
    }
  }

    return (
      <>
        {users.map(user => (
          <User key={user.id}
            user={user}
            removeUser={() => removeUser(user)}
          />
        ))}
      </>
    )  
}

export default Users