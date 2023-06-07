import './App.css'
import ContenedorNoticias from './components/ContenedorNoticias';
import Titulo from './components/Titulo';
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Titulo content={ "Noticias" }></Titulo>
      <Buscador></Buscador>
      <ContenedorNoticias></ContenedorNoticias>
    </>
  )
}

export default App;
