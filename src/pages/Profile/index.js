import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EditUser from "../../components/EditUser";
import MyGarden from "../../components/MyGarden";
import profile from '../../assets/05 - Imagem.png'


import {
  Button,
  Accordion,
} from "react-bootstrap";
import AllPlants from "../AllPlants";
import Quizz from "../Quizz";

function Profile() {
  //const decoratedOnClick = useAccordionButton(eventKey, onClick);

  const { id } = useParams();

  const [user, setUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //states das perguntas
  const [luminosidade, setLuminosidade] = useState(0);
  const [cuidado, setCuidado] = useState(0);

  const [form, setForm] = useState({
    nome: "",
    idade: "",
    moradia: "",
    garden: [],
  });

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/jungle-wd-85-profile/${id}`
        );

        setUser(response.data);
        setForm(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [id, reload]);

  function handleAccordion() {
    console.log("dentro da funcao");
    setReload(!reload);
  }
  console.log(user);

  return (
    <div>
    <div style={{display:"flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"}}>
    <h1 className="AllSub">Perfil</h1>
    <img src={profile} alt="plantinha" className="profileImg"/>
    </div>
      <div className="barraSup">
        <span className="userNome">{user.nome}</span>
        <span><strong>Moradia:</strong> {user.moradia} |</span>
        <span style={{marginRight:"12px"}}>{user.idade} anos</span>

        <Button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-light btn-outline-dark btn-sm me-2" style={{backgroundColor:"#7C6053", color:"white", borderColor:"#7C6053"}}>
          Editar Perfil
        </Button>
      </div>

      {showForm === true && (
        <EditUser
          form={form}
          id={id}
          setShowForm={setShowForm}
          setForm={setForm}
          reload={reload}
          setReload={setReload}
          showForm={showForm}
        />
      )}

      <div className="mt-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={handleAccordion}>
              Meu Jardim
            </Accordion.Header>
            <Accordion.Body>
              <MyGarden
                user={user}
                id={id}
                showForm={showForm}
                setShowForm={setShowForm}
                reload={reload}
                setReload={setReload}
                isLoading={isLoading}
              />
            </Accordion.Body>
          </Accordion.Item>

          {!isLoading && (
            <>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Todas as Plantas</Accordion.Header>
                <Accordion.Body>
                  <AllPlants
                    id={id}
                    user={user}
                    reload={reload}
                    setReload={setReload}
                    showForm={showForm}
                    setShowForm={setShowForm}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Quiz de Plantas</Accordion.Header>
                <Accordion.Body>
                  <Quizz
                    luminosidade={luminosidade}
                    cuidado={cuidado}
                    setCuidado={setCuidado}
                    setLuminosidade={setLuminosidade}
                    id={id}
                    user={user}
                    reload={reload}
                    setReload={setReload}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </>
          )}
        </Accordion>
      </div>
    </div>
  );
}

export default Profile;
