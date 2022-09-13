import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col, Card } from "react-bootstrap";
import { Link } from "react";

function AllPlants() {
  const [allPlants, setAllPlants] = useState([{ nomePopular: "" }]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    async function fetchPlants() {
       setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/jungle-wd-85`
        );

        setAllPlants(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlants();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  console.log(allPlants);
  return (
    <>
      {!isLoading && (
        <>
          <NavBar />
          <h1>ALLPlants</h1>

          <Col className="col-10">
            <Form.Control
              value={search}
              onChange={handleSearch}
              placeholder="Encontre a sua planta"
            />
          </Col>

          {allPlants

            // .filter((plant) => plant.nomePopular.includes(search))

            .map((plant) => {
              return (
                <Card
                  key={plant._id}
                  style={{
                    width: "18rem",
                    margin: "20px",
                    alignItems: "center",
                    border: "solid black 2px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://images.tcdn.com.br/img/img_prod/674984/muda_de_zamioculca_planta_da_fortuna_media_33878507_3_a097fb0409694b8830646af95ba84d30.jpg"
                    style={{ width: "10rem" }}
                  />

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
        </>
      )}
    </>
  );
}

export default AllPlants;
