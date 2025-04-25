import './estilos/Login.css';
import PageTransition from './estilos/animação-telas';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Login() {

  const navigate = useNavigate();

  const INICIOLOG = () => {
    navigate("/");
  }
  
  const registrar = () => {

    navigate("/cadastrar");

  }


  
  return (

    <PageTransition>
      <div className="login-tela">
        <div className="input-groupo">
          <input type="text" id="regUsername" placeholder=" "></input>
          <label for="email">Email</label>
        </div>



        <div className="input-groupo">
          <input type="password" id="regpassword" placeholder=" "></input>
          <label for="password">senha</label>
        </div>

        <div className="lembrar-senha">
          <label><input type="checkbox"></input> lembrar-se de mim</label>
          <a href="#">esqueceu sua senha?</a>
        </div>

        <div className="button">

          <button className="entrar">ENTRAR</button>

          <button onClick={registrar} className="registrar">CRIAR CONTA</button>

          <button onClick={INICIOLOG} className="HOME">INICIO</button>
        </div>
      </div>
    </PageTransition>
  );
}
