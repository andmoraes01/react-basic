import Comments from './components/Comments';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h1 className='header'>
        <img className="custom-logo" src={logo} alt="Logo" />
        Meu projeto
        <img className="custom-logo right-logo-padding" src={logo} alt="Logo" />
      </h1>   

      <Comments name="André" email="andre@mail.com" date={new Date()}>
        Comentário do André
      </Comments>

      <Comments name="João" email="joao@mail.com" date={new Date()}>
        Comentário do João
      </Comments>

      <Comments name="Maria" email="maria@mail.com" date={new Date()}>
        Comentário da Maria
      </Comments>

    </div>    
  );
}

export default App;
