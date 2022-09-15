import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col} from "react-bootstrap";

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
          <h1>ALLPlants</h1>

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
                <CardAllPlants
                  plant={plant}
                  handleAddGarden={handleAddGarden}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default AllPlants;
