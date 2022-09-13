// HOMEPAGE COM INFOS BASICAS DO PROJETO, IMAGENS DE RECEPÇAO E OPCAO DE CRIAÇAO DE PERFIL QUE VAI SER ENCAMINHADO PARA A PAGE PROFILES
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import hamburguinho from "../../assets/Hamburguinho.png";

function HomePage() {
  return (
    <div className="homePageHero"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          flexDirection: "row",
          marginTop: "18px",
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "48%", marginTop:"15px" }} />
        <img src={hamburguinho} alt="hamburguinho" style={{ width: "6%", marginTop:"15px" }} />
      </div>

      <div className="body">
        <p className="txtInicio">
          Lorem impsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Peilentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdu eu. Curabitur pellentesque nibh nibh, at maximus
          ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        </p>


        <Link to="/user-profile">
          <button className="inicio">Crie seu perfil</button>
        </Link>
      </div>

    </div>
  );
}

export default HomePage;
