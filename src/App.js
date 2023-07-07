import Comments from './components/Comments';
import './App.css';
import logo from './logo.svg';
import { Component } from 'react';

class App extends Component {

  state = {
    comments: [
      {
        id: 1231231230,
        name: 'André',
        email: 'andre@mail.com',
        date: new Date(),
        mensage: 'Mensagem no array André',
      },
      {
        id: 4564564560,
        name: 'Maria',
        email: 'maira@mail.com',
        date: new Date(),
        mensage: 'Mensagem no array Maria',
      },
      {
        id: 7897897890,
        name: 'João',
        email: 'joão@mail.com',
        date: new Date(),
        mensage: 'Mensagem no array João',
      },
    ]
  }

  render () {
    return (
      <div className="App">
        <h1 className='header'>
          <img className="custom-logo" src={logo} alt="Logo" />
          Meu projeto
          <img className="custom-logo right-logo-padding" src={logo} alt="Logo" />
        </h1>   

        {this.state.comments.map((comments, index) => (
          <Comments
            key={index} 
            name={comments.name} 
            email={comments.email}
            date={comments.date}>
            {comments.mensage}
          </Comments>          
        ))}

        <button onClick={this.addComments}>
          Adicionar um comentário
        </button>        
      
      </div>    
    );
  }
  
  addComments = () => {

    const newComment = {
      id: 1234567890,
      name: 'Pedro',
      email: 'pedro@mail.com',
      date: new Date(),
      mensage: 'Comentário do Pedro'
    }
    
    // FEZENDO A CÓPIA DO ARRAY E ADICIONANDO UM NOVO ELEMENTO 
    // let list = this.state.comments;
    // list.push(newComment);    
    // this.setState({comments: list});   
    this.setState({
      comments:[...this.state.comments, newComment]
    })
  }
}

export default App;
