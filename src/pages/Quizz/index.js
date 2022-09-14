// QUIZZ - 5 PERGUNTAS COM OPCOES DE RESPOSTAS DE 1 À 5 PARA MOSTRAR AS PLANTAS QUE SE ENCAIXAM MELHOR COM O USUARIO
import { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function Quizz({ cuidado, setCuidado, luminosidade, setLuminosidade, id }) {
  const [resultQuizz, setResultQuizz] = useState([]);

  const allquestions = [
    {
      pergunta: "Você possui plantas em casa?",
      res: "",
    },
    {
      pergunta: "Com que frequencia você cuida das suas plantas?",
      res: "",
    },
    {
      pergunta: "Com que frequência você rega as suas plantas?",
      res: "",
    },
    {
      pergunta: "Normalmente, qual a temperatura da sua casa?",
      res: "",
    },
    {
      pergunta: "O quanto a sua casa é arejada?",
      res: "",
    },
    {
      pergunta: "De 0 a 5, quanta luminosidade tem na sua casa?",
      res: "",
    },
  ];

  function handleRange(e, index) {
    console.log(e.target.value);
    console.log(index);

    allquestions[index].res = e.target.value;
  }

  console.log(allquestions);

  async function handleSubmitQuiz() {
    // pegar os valores das res, fazer a média

    const avgCare = Math.round(
      (+allquestions[0].res + +allquestions[1].res + +allquestions[2].res) / 3
    );

    const avgLum = Math.round(
      (+allquestions[3].res + +allquestions[4].res + +allquestions[5].res) / 3
    );

    console.log(avgCare, avgLum);

    const allPlants = await axios.get(
      `https://ironrest.herokuapp.com/jungle-wd-85`
    );
    console.log(allPlants.data);

    const filteredArray = allPlants.data.filter((plant) => {
      console.log(plant.luminosidade <= avgLum);
      console.log(plant.cuidado <= avgCare);
      return plant.luminosidade <= avgLum && plant.cuidado <= avgCare;
    });

    setResultQuizz(filteredArray);
  }

  return (
    <div>
      {allquestions.map((element, index) => {
        return (
          <div key={element.pergunta}>
            <p>{element.pergunta}</p>
            <span>Pouco</span>{" "}
            <input
              type="range"
              onChange={(e) => handleRange(e, index)}
              min={1}
              max={5}
              step={1}
              defaultValue={1}
            />
            <span>Muito</span>
          </div>
        );
      })}
      <button onClick={handleSubmitQuiz}>Finalizar quizz</button>

      {resultQuizz.map((plant) => {
        return (
          <div key={plant.nomePopular}>
            <Card
              style={{
                width: "18rem",
                margin: "20px",
                alignItems: "center",
                border: "solid black 2px",
              }}
            >
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
                  <ListGroup.Item>
                    Luminosidade: {plant.luminosidade}
                  </ListGroup.Item>

                  <ListGroup.Item>{plant.info.slice(0, 60)}</ListGroup.Item>
                  <button>ENVIAR PARA O PERFIL DO USUÁRIO</button>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Quizz;
