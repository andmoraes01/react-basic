import React, { Component } from 'react'

import './AddUser.css'

const INITIAL_STATE = { 
  user: { name: '', lastName: '', email: '' } 
}

class AddUser extends Component {

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    const { name, value } = event.target
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    const user = this.state.user
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(addUsersData => {
        this.setState(INITIAL_STATE);
        this.props.addUser(addUsersData);
      })
  }

  render() {
    return (
      <div className="AddUser">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="Line">
            <div className="Column">
              <label>Nome</label>
              <input
                type="text"
                name="name"
                value={this.state.user.name}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Column">
              <label>Sobrenome</label>
              <input
                type="text"
                name="lastName"
                value={this.state.user.lastName}
                onChange={this.onChangeHandler}
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
                value={this.state.user.email}
                onChange={this.onChangeHandler}
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
}

export default AddUser