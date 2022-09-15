import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CardAllPlants from "../../components/CardAllPlants";

function AllPlants({ user, id }) {
  const [allPlants, setAllPlants] = useState([{ nomePopular: "" }]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [plantsFilter, setPlantsFilter] = useState([{ nomePopular: "" }]);

  async function handleAddGarden(e, plant) {
    e.preventDefault();
    const clone = { ...user };
    console.log(clone);
    clone.garden.push(plant); //planta adicionada na array de garden
    delete clone._id;

    await axios.put(
      `https://ironrest.herokuapp.com/jungle-wd-85-profile/${id}`,
      clone
    );

    //enviar o clone para a API. como PUT
    //setReload(!reload)
  }

  useEffect(() => {
    async function fetchPlants() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/jungle-wd-85`
        );

        setAllPlants(response.data);
        setPlantsFilter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlants();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);

    const plantsFiltered = allPlants.filter((plant) => {
      return plant.nomePopular
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase());
    });

    setPlantsFilter(plantsFiltered);
  }

  console.log(user);
  return (
    <>
      {!isLoading && (
        <div>
          <h1>Todas as Plantas</h1>

          <Col className="col-10">
            <Form.Control
              value={search}
              onChange={handleSearch}
              placeholder="Encontre a sua planta"
            />
          </Col>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
            {plantsFilter.map((plant) => {
              return (
                <Card
                  key={plant._id}
                  style={{
                    width: "18rem",
                    margin: "20px",
                    alignItems: "center",
                    border: "solid black 2px",
                  }}>
                  <Card.Img
                    variant="top"
                    src={plant.Imagens}
                    style={{ width: "17,5rem" }}
                  />
                  <Card.Title>"{plant.nomePopular}"</Card.Title>

                  <Card.Body>
                    <Card.Subtitle>"{plant.nomeCientifico}"</Card.Subtitle>

                    <ListGroup className="list-group-flush">
                      <ListGroup.Item> Origem: {plant.origem}</ListGroup.Item>
                      <ListGroup.Item> Cuidado: {plant.cuidado}</ListGroup.Item>
                      <ListGroup.Item>
                        Luminosidade: {plant.luminosidade}
                      </ListGroup.Item>

                      <ListGroup.Item>{plant.info.slice(0, 60)}</ListGroup.Item>

                      <button onClick={(e) => handleAddGarden(e, plant)}>
                        Adicionar ao meu Jardim
                      </button>

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
