import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

function CardAllPlants({ plant, handleAddGarden }) {
  const [showDetail, setShowDetail] = useState(false);

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
      <Card.Title>{plant.nomePopular}</Card.Title>

      <Card.Body>
        <Card.Subtitle>{plant.nomeCientifico}</Card.Subtitle>

        <ListGroup className="list-group-flush">
          <ListGroup.Item> Origem: {plant.origem}</ListGroup.Item>
          <ListGroup.Item> Cuidado: {plant.cuidado}</ListGroup.Item>
          <ListGroup.Item>Luminosidade: {plant.luminosidade}</ListGroup.Item>

          {showDetail ? (
            <ListGroup.Item>
              {plant.info}{" "}
              <button onClick={() => setShowDetail(!showDetail)}>
                Esconder...
              </button>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>
              {plant.info.slice(0, 70)}
              <button onClick={() => setShowDetail(!showDetail)}>
                Leia mais...
              </button>
            </ListGroup.Item>
          )}

          {window.location.pathname !== "/allplants" && (
            <button onClick={(e) => handleAddGarden(e, plant)}>
              COLOCAR NO MEU JARDIM
            </button>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardAllPlants;
