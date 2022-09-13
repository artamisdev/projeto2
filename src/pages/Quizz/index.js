// QUIZZ - 5 PERGUNTAS COM OPCOES DE RESPOSTAS DE 1 À 5 PARA MOSTRAR AS PLANTAS QUE SE ENCAIXAM MELHOR COM O USUARIO

import NavBar from "../../components/NavBar";


function Quizz() {

  const arrayQuestions = [{
    pergunta1: " ",
    op1: 1,
    op2: 2,
    op2: 3,
    op2: 4,
    op2: 5 }, 
    
    {pergunta2: " ",
    op1: 1,
    op2: 2,
    op2: 3,
    op2: 4,
    op2: 5 }, 

    {pergunta3: " ",
    op1: 1,
    op2: 2,
    op2: 3,
    op2: 4,
    op2: 5 }, 

    {pergunta4: " ",
    op1: 1,
    op2: 2,
    op2: 3,
    op2: 4,
    op2: 5 },

    {pergunta5: " ",
    op1: 1,
    op2: 2,
    op2: 3,
    op2: 4,
    op2: 5 }];

  return (
    <div>
      <NavBar />

      <h1>QUIZZ</h1>

      

      {arrayQuestions.map((question) => {

        question

      })}

          
      <input type="range" id="vol" name="vol" min="0" max="5"/>

    </div>
  );
}

export default Quizz;
