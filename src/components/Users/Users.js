import React, { Component } from 'react'

import AddUser from '../AddUser/AddUser'
import User from '../User/User'

class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser(user) {
    const users = [...this.state.users, user]
    this.setState({ users: users })
  }

  removeUser(user) {
    if (window.confirm(`Tem certeza que deseja remover "${user.name} ${user.lastName}"?`)) {

      fetch(`https://reqres.in/api/users/${user.id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            let users = this.state.users
            users = users.filter(x => x.id !== user.id)
            this.setState({ users: users })
          }
        })
    }
  }

  // Este método é executado após o componente se montado: 
  //Executa o fetch na url da api, pega a resposta, transforma em texto e retorna mostrando os dados em tela.
  componentDidMount() { 
    //Implementando o método GET:
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(usersData => {
        const usersDataFormatedForMyStateFormat = usersData.data.map( userData =>{
          return {
            id: userData.id,
            name: userData.first_name,
            lastName: userData.last_name,
            email: userData.email
          }
        })
        //Atualiza o estado dos usuários, para listagem na tela inicial.
        this.setState({users: usersDataFormatedForMyStateFormat})
      })     
  }

  render() {
    return (
      <>
        <AddUser addUser={this.addUser} />

        {this.state.users.map(user => (
          <User key={user.id}
            user={user}
            removeUser={this.removeUser.bind(this, user)}
          />
        ))}
      </>
    )
  }
}

export default Users