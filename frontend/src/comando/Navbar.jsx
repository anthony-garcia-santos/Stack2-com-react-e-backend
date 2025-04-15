import { Link } from "react-router-dom";
import "./Navbar.css";
import '../../index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CONJUNTO PIXELADO</h2>

      <div className="login-e-cadastro">

        <Link to="/Login" className="link-login">CONECTAR-SE</Link>
        <Link to="/Cadastrar" className="link-cadastrar">INSCREVER-SE</Link>

      </div>
      
    </nav>
  );
}

export default Navbar;
