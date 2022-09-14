import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AllPlants from "./pages/AllPlants";
import Quizz from "./pages/Quizz";
import Profiles from "./pages/Profiles";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import CreateProfile from "./pages/CreateProfile";
import NavBar from "./components/NavBar";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/allplants" element={<AllPlants />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/user-profile/:id" element={<Profile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
