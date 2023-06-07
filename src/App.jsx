import './App.css'
import ContenedorNoticias from './components/ContenedorNoticias';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Titulo content={ "Noticias" }></Titulo>
      <ContenedorNoticias></ContenedorNoticias>
    </>
  )
}

export default App;
