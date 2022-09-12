import NavBar from "../../components/NavBar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react";


function AllPlants() {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/jungle-wd-85`
        );

        setAllPlants(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlants();
  }, []);

  return (

    <div>
      <NavBar />
      <h1>ALLPlants</h1>

      {allPlants.map((plant) => {
        return (
          <Card
            key={plant._id}
            style={{ width: "18rem", margin: "20px", alignItems: "center", border: "solid black 2px"  }}
          >
            <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/674984/muda_de_zamioculca_planta_da_fortuna_media_33878507_3_a097fb0409694b8830646af95ba84d30.jpg" style={{width: "10rem"}}/>
            <Card.Body>

              <Card.Title>{plant.nomePopular}</Card.Title>
              <Card.Subtitle>{plant.nomeCientifico}</Card.Subtitle>

                <p>Origem: {plant.origem}</p>
                <p>Cuidado: {plant.cuidado}</p>
                <p>Luminosidade: {plant.luminosidade}</p>
             
              <Card.Text>{plant.info}</Card.Text>

            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default AllPlants;
