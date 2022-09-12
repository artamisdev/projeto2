// HOMEPAGE COM INFOS BASICAS DO PROJETO, IMAGENS DE RECEPÇAO E OPCAO DE CRIAÇAO DE PERFIL QUE VAI SER ENCAMINHADO PARA A PAGE PROFILES

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HOMEPAGE</h1>

      <Link to={"/profiles"}>Criar Perfil</Link>
    </div>
  );
}

export default HomePage;
