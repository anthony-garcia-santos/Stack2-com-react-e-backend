
import './estilos/Cadastrar.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Cadastrar() {

  const navigate = useNavigate();
  
  const voltar = () => {

    navigate('/');
  };

    return (
      <div className='tela-cadastro'>


        <div className="input-groupo-registro">
            <input type="text" placeholder=" "></input>
            <label for="registrar-email">registrar-email</label>
        </div>

        <div className="input-groupo-registro">
            <input type="password" placeholder=" "></input>
            <label for="password-registro">registrar-senha</label>
        </div>

        <div className="button-registro">
            <button className="registrar-se">registrar-se</button>
            <button onClick={voltar} className="voltar">Voltar para tela de login</button>
        </div>
      </div>  
);}
  
export default Cadastrar;
  