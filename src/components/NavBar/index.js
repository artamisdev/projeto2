import { Link } from "react-router-dom";
import axios from "axios";

function NavBar() {
  return (
    <div>
      <nav className="navbar shadow-md rounded-bottom">
        
        <Link to="/">HomePage</Link>

        <Link to="/profiles">Profiles</Link>

        <Link to="/allplants">AllPlants</Link>

        <Link to="/quizz">Quizz</Link>

        <Link to="/about">AboutUs</Link>

      
      </nav>
    </div>
  );
}

export default NavBar;
