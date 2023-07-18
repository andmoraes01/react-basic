import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Comments from './components/Comments/Comments';
import AddNewComment from './components/Comments/AddNewComment';
import { BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Users from './components/Users/Users'

class App extends Component {
  state = {
    comments: [
      {
        id: 1231231230,
        name: 'André',
        email: 'andre@mail.com',
        date: new Date(),
        message: 'Mensagem no array André',
      },
      {
        id: 4564564560,
        name: 'Maria',
        email: 'maira@mail.com',
        date: new Date(),
        message: 'Mensagem no array Maria',
      },
      {
        id: 7897897890,
        name: 'João',
        email: 'joão@mail.com',
        date: new Date(),
        message: 'Mensagem no array João',
      },
    ],
  };


  // Função para renderizar os comentários em tela
  renderComments() {
    return this.state.comments.map((comment, index) => (
      <Comments
      key={index}
      name={comment.name}
      email={comment.email}
      date={comment.date}
      onRemove={() => this.deleteComment(comment)}
      >
        {comment.message}
      </Comments>
    ));
  }

  //Funçao para adicionar os comentários, onde recebe os valores "name", "email", "message" como argumentos. 
  addComment = (name, email, message) => {
    const id = this.setIdForNewComment();
    const newComment = {
      id: id,
      name: name,
      email: email,
      date: new Date(),
      message: message,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  // Filta os comentários pelo ID para realizar a deleção.
  deleteComment = (comment) => {
    const updatedComments = this.state.comments.filter(
      (c) => c.id !== comment.id
    );
    this.setState({ comments: updatedComments });
  };

  setIdForNewComment = () => {
    const id = Math.floor(Math.random() * 9000000000) + 1000000000;
    return id;
  };

  render() {
    return (
      <Router>
        <div className="App">

          <h1 className="header">
            <img className="custom-logo" src={logo} alt="Logo" />
            React Project
            <img className="custom-logo right-logo-padding" src={logo} alt="Logo" />
          </h1>

          <nav>
            <ul>
              <li
                ><NavLink to="/"> Início </NavLink>
              </li>
              <li>
                <NavLink to="/usuarios"> Usuários Cadastrados </NavLink>
              </li>
              <li>
                <NavLink to="/adicionar"> Adicionar Usuários </NavLink>
              </li>
              <li>
                <NavLink to="/comentarios"> Comentários </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>    
            <Route path="/" element={ 
              <div className="users"> <Users/> </div>
            } />
            <Route path="/usuarios" element={<div />} />
            <Route path="/adicionar" element={<div />} />
            <Route path="/comentarios" element={
              <React.Fragment>
                {this.renderComments()}
                <AddNewComment addComment={this.addComment} />
              </React.Fragment>
            } />
            <Route path="*" element={
              <PageNotFound></PageNotFound>
            }/>
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;
