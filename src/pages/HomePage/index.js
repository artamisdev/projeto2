// HOMEPAGE COM INFOS BASICAS DO PROJETO, IMAGENS DE RECEPÇAO E OPCAO DE CRIAÇAO DE PERFIL QUE VAI SER ENCAMINHADO PARA A PAGE PROFILES
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePageHero">
      <div className="homeBody">
        <p className="homeTxtInicio">
          Nosso projeto tem o intuito de te ajudar a encontrar a planta que mais
          se encaixe com a sua casa e personalidade. Queremos te ajudar a fazer
          o seu ambiente ficar ainda mais aconchegante e verde! Sinta se à
          vontade por aqui!
        </p>

        <Link to="/create-profile">
          <button className="homeInicio">Crie seu perfil</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
