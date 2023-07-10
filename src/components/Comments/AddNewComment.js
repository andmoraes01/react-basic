import React, { Component } from 'react';
import './AddNewComment.css';
class AddNewComment extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  //Atualiza o estado interno do componente com base nos valores inseridos nos campos do formulário. 
  //É acionado quando ocorre o evento, no caso quando algum dado é inputado. (usuário digitando)
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  //Acionado quando o formulário é enviado pelo usuário.
  handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode acessar os valores inseridos no estado (this.state.name, this.state.email, this.state.message)
    // e executar a lógica necessária para adicionar um novo comentário ao estado do componente App.
    // Por exemplo, você pode chamar uma função `this.props.addComment` passando os valores como argumentos.
    this.props.addComment(this.state.name, this.state.email, this.state.message);
    // Em seguida, você pode redefinir o estado para limpar o formulário.
    this.setState({ name: '', email: '', message: '' });
  };

  render() {
    return (
      <form className="New-comment" method="post" onSubmit={this.handleSubmit}>
        <h2>Adicionar Comentário</h2>
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            placeholder="Digite o seu nome aqui:"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            placeholder="Digite o seu email aqui:"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            rows="4"
            required
            placeholder="Deixe aqui sua mensagem:"
          />
        </div>
        <button type="submit">Adicionar um comentário</button>
      </form>
    );
  }
}

export default AddNewComment;
