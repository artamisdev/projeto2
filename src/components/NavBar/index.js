import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to={"/"}>HomePage</Link>

      <Link to={"/profiles"}>Profiles</Link>

      <Link to={"/allplants"}>AllPlants</Link>

      <Link to={"/about"}>AboutUs</Link>
    </div>
  );
}

export default NavBar;
