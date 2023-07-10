import React, { Component } from 'react'

import AddUser from '../AddUser/AddUser'
import User from '../User/User'

class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: [
        { id: 1, nome: 'João', sobrenome: 'Silva', email: 'joao@mail.com' },
        { id: 2, nome: 'Maria', sobrenome: 'Santos', email: 'maria@mail.com' }
      ]
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      let usuarios = this.state.usuarios
      usuarios = usuarios.filter(x => x.id !== usuario.id)
      this.setState({ usuarios: usuarios })
    }
  }

  render() {
    return (
      <>
        <AddUser adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <User key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Users