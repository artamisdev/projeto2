// HOMEPAGE COM INFOS BASICAS DO PROJETO, IMAGENS DE RECEPÇAO E OPCAO DE CRIAÇAO DE PERFIL QUE VAI SER ENCAMINHADO PARA A PAGE PROFILES

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <h1>HOMEPAGE</h1>

      <Link to="/user-profile">
        <Button className="btn btn-light btn-outline-dark">
          Crie seu perfil
        </Button>
      </Link>
      
    </div>
  );
}

export default HomePage;
