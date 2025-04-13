import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pagina/home.jsx';
import Navbar from './comando/Navbar.jsx';
import Cadastrar from './pagina/cadastrar.jsx';
import Login from './pagina/login.jsx';


function App() {
  return (
    <BrowserRouter>


      <Navbar />
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
