// QUIZZ - 5 PERGUNTAS COM OPCOES DE RESPOSTAS DE 1 À 5 PARA MOSTRAR AS PLANTAS QUE SE ENCAIXAM MELHOR COM O USUARIO
import { useState } from "react";

function Quizz() {
  const allquestions = [
    {
      pergunta: "Você possui plantas em casa?",
    },
    {
      pergunta: "Com que frequencia você cuida das suas plantas?",
    },
    {
      pergunta: "Com que frequência você rega as suas plantas?",
    },
    {
      pergunta: "Normalmente, qual a temperatura da sua casa?",
    },
    {
      pergunta: "O quanto a sua casa é arejada?",
    },
    {
      pergunta: "De 0 a 5, quanta luminosidade tem na sua casa?",
    },
  ];

  return (
    <div>
      {allquestions.map((element) => {
        return (
          <div>
            <p>{element.pergunta}</p>

            <spam>Pouco</spam> <input type="range" min={1} max={5} step={1} defaultValue={1} /> <spam>Muito</spam>
          </div>
        );
      })}
    </div>
  );
}

export default Quizz;
