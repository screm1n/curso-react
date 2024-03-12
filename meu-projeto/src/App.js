import './App.css';

function App() {
  const name = 'Octávio'
  
  const url = 'https://i.imgur.com/1TkfhNy.jpeg'

  return (
    <div className="App">
      <h1>Olá, {name}!</h1>
      <p>Meu primeiro App</p>
      <img src ={url} width={350} alt='minha imagem' />
    </div>
  )
}

export default App
