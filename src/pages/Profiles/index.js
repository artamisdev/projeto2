// PAGINA COM TODOS OS PERFIS DOS USERS E O FORM PARA CADASTRO
import NavBar from "../../components/NavBar";

import { Link } from "react-router-dom";

function Profiles() {


 // https://ironrest.herokuapp.com/jungle-wd-85-profile 


  return (
    <>
      <NavBar />

      <h1>PROFILES</h1>
      <Link to="/user-profile" >Profile</Link>
    </>
  );
}

export default Profiles;
