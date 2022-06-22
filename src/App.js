
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaUsuarios from './components/usuario/ListaUsuarios';
import AgregarUsuario from './components/usuario/AgregarUsuario';
import EditarUsuario from './components/usuario/EditarUsuario';
import Nav from './components/navegation/Navegation';
import Pruebaform from './components/usuario/Pruebaform';

function App() {
  return (
    <div className="App">

    <BrowserRouter>

     <div className='container-home'> 
    <Nav/>

      <Routes>
        <Route path='/' element={<ListaUsuarios/>} />
        <Route path='/adduser' element={<AgregarUsuario/>} />
        <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} />
        <Route path='/prueba' element={<Pruebaform/>} />

      </Routes>
      </div>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
