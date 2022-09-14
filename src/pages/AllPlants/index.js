import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col, Card } from "react-bootstrap";
import { Link } from "react";
import ListGroup from "react-bootstrap/ListGroup";

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


  // // const shortInfo = allPlants[0].info.slice(0,80)

  // const fullInfo = allPlants[0].info



  return (
    <>
      {!isLoading && (
        <div>
          <h1>ALLPlants</h1>

          <Col className="col-10">
            <Form.Control
              value={search}
              onChange={handleSearch}
              placeholder="Encontre a sua planta"
            />
          </Col>
        <div style={{display: "flex",
                     flexWrap: "wrap",
                    flexDirection: "row",
                    justifyContent:"space-evenly"}}>
          {allPlants

            .map((plant) => {
              return (

              
                <Card
                  key={plant._id}
                  style={{
                    width: "18rem",
                    margin: "20px",
                    alignItems: "center",
                    border: "solid black 2px"
                    
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={plant.Imagens}
                   style={{ width: "17,5rem"}}
                  />
                  <Card.Title>{plant.nomePolular}</Card.Title>

                  <Card.Body>
                    <Card.Subtitle>{plant.nomeCientifico}</Card.Subtitle>

                    <ListGroup className="list-group-flush">
                      <ListGroup.Item> Origem: {plant.origem}</ListGroup.Item>
                      <ListGroup.Item> Cuidado: {plant.cuidado}</ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        Luminosidade: {plant.luminosidade}
                      </ListGroup.Item>
                      
                      <ListGroup.Item>{plant.info.slice(0,60)}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              );
            })}
            </div>
        </div>
      )}
    </>
  );
}

export default AllPlants;
