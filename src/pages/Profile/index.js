import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditUser from "../../components/EditUser";

import {
  Button,
  Modal,
  Form,
  Accordion,
  FloatingLabel,
  Card,
} from "react-bootstrap";
import AllPlants from "../AllPlants";
import Quizz from "../Quizz";

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //states das perguntas
  const [luminosidade,setLuminosidade] = useState(0)
  const [cuidado, setCuidado] = useState(0)


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

  console.log(user);

  return (
    <div>
      <div className="card d-flex flex-row shadow-md justify-content-between align-items-center">
        <span className="m-2 fs-2 fw-semibold">{user.nome}</span>
        <span>Moradia: {user.moradia}</span>
        <span>{user.idade} anos</span>

        <Button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-light btn-outline-dark btn-sm me-2">
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

      {!isLoading && (
        <div className="mt-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Meu Jardim</Accordion.Header>
              <Accordion.Body>
                {
                  user.garden
                }
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Todas as Plantas</Accordion.Header>
              <Accordion.Body>
                <AllPlants />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Quizz de Plantas</Accordion.Header>
              <Accordion.Body>
                <Quizz 
                luminosidade={luminosidade}
                cuidado={cuidado}
                setCuidado={setCuidado}
                setLuminosidade={setLuminosidade}
                id={id}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default Profile;
