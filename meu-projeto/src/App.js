import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {
  const name = 'Octávio'
  
  const url = 'https://i.imgur.com/1TkfhNy.jpeg'

  return (
    <div className="App">
      <h1>Olá, {name}!</h1>
      <p>Meu primeiro App</p>
      <img src ={url} width={350} alt='minha imagem' />
      <HelloWorld />
      <SayMyName nome='Octavio' />
      <Pessoa 
      nome="Octavio" 
      idade="22"
      profissao="Programador" />
      <Frase />
    </div>
  )
}

export default App
