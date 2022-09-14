// QUIZZ - 5 PERGUNTAS COM OPCOES DE RESPOSTAS DE 1 À 5 PARA MOSTRAR AS PLANTAS QUE SE ENCAIXAM MELHOR COM O USUARIO
import { useState } from "react";

function Quizz({ cuidado, setCuidado, luminosidade, setLuminosidade, id }) {
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

  function handleSubmitQuiz() {
    // pegar os valores das res, fazer a média

    const avgCare = Math.round(
      (+allquestions[0].res + +allquestions[1].res + +allquestions[2].res) / 3
    );

    const avgLum = Math.round(
      (+allquestions[3].res + +allquestions[4].res + +allquestions[5].res) / 3
    );

    console.log( avgCare, avgLum);
    
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
            />{" "}
            <span>Muito</span>
          </div>
        );
      })}
      <button onClick={handleSubmitQuiz}>Finalizar quizz</button>
    </div>
  );
}

export default Quizz;
