import './App.css';
import Evento from './components/Evento';
import Form from './components/Form'

function App() {
  const name = 'Octávio'
  
  const url = 'https://i.imgur.com/1TkfhNy.jpeg'

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
    </div>
  )
}

export default App
