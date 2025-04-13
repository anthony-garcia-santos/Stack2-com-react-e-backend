
import { Navigate, useNavigate } from 'react-router-dom';

import './estilos/Home.css';

function Home() {
  
  const navigate = useNavigate();
  
  const cadastrar = () => {

    navigate('/Cadastrar');
  };

  return (
    <div className='apresentacao'>
      <h1>Lindas galerias de fotos de clientes</h1>
      <p2>A melhor maneira para fotógrafos modernos compartilharem, entregarem, revisarem e venderem on-line.</p2>

    <div className='botaos'>
      <button onClick={cadastrar}>começar</button>
    </div>
      
    </div>
  );
}
  
export default Home;
  