import React, { Component } from 'react'

import './AddUser.css'

class AddUser extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      user: { name: '', lastName: '', email: '' } 
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    const { name, value } = event.target
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    const user = { ...this.state.user, id }

    this.setState({ user: { name: '', lastName: '', email: '' } })
    this.props.addUser(user)
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