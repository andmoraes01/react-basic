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
    ],
    newComment:{
      name:'',
      email:'',
      mensage:'',
      id:''
    }
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

        <form method="post" onSubmit={this.addComments}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="name" 
              value={this.state.newComment.name}
              onChange={this.setValuesWhenChangeValueOnInput}
              placeholder="Digite o seu nome aqui:"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.newComment.email}
              onChange={this.setValuesWhenChangeValueOnInput}
              placeholder="Digite o seu email aqui:"
            />
          </div>
          <div>
            <textarea
              name='mensage'
              value={this.state.newComment.mensage}
              onChange={this.setValuesWhenChangeValueOnInput}
              rows='4'
              placeholder='Deixe aqui sua mensagem:'
            />
          </div>            
          <button type='submit'> Adicionar um comentário </button>
        </form>
      </div>    
    );
  }
  
  addComments = (event) => {
    event.preventDefault();
    const id = this.setIdForNewComment();
    const newComment = {
      ...this.state.newComment, 
      date: new Date(),
      id: id
    }
    this.setState({
      comments:[...this.state.comments, newComment],
      newComment: {name: '', email:'', mensage:''}
    })
  }

  setValuesWhenChangeValueOnInput = event => {
    const {name,value} = event.target;   
    this.setState({ newComment: {...this.state.newComment, [name]: value}})
  }

  setIdForNewComment = () =>{
   const id = Math.floor(Math.random() * 9000000000) + 1000000000;
   return id;
  }
}

export default App;
