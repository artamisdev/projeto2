// PAGINA COM TODOS OS PERFIS DOS USERS E O FORM PARA CADASTRO
import NavBar from "../../components/NavBar";
import Profile from "../Profile";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";

function Profiles() {
  const [user, setUser] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPlanta() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/jungle-wd-85-profile"
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlanta();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <NavBar />

      <div>
        <Row>
          <Col className="col-10">
            <Form.Control
              value={search}
              onChange={handleSearch}
              placeholder="Procure um companheiro jardineiro"
            />
          </Col>

          <Col>
            <Link to="/user-profile">
              <Button className="btn btn-light btn-outline-dark">
                Crie Perfil
              </Button>
            </Link>
          </Col>
        </Row>

        {
          <Row className="d-flex justify-content-evenly mt-4">
            {user
              .filter((user) =>
                user.nome.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => {
                return (
                  <Card
                    key={user._id}
                    style={{
                      width: "14rem",
                      margin: "20px",
                      alignItems: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://thumbor.cartpanda.com/4zmdTFchn7WoN3E5SkWqW481nwc=/600x0/https://assets.mycartpanda.com/static/products_images/dDGNEXKGrqaRiJ3n84bwzyW9CFIz0d.jpg"
                    />
                    <Card.Body>
                      <Card.Title>{user.nome}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {user.sexo}
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        idade: {user.idade} anos
                      </Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                      <Link to={`/profile/${user._id}`}>
                        <Button variant="dark">Perfil Completo</Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                );
              })}
          </Row>
        }
      </div>
    </>
  );
}

export default Profiles;
