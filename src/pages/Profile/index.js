import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  Button,
  Modal,
  Form,
  Accordion,
  FloatingLabel,
  Card,
} from "react-bootstrap";

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    idade: "",
    sexo: "",
    garden: "",
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
        <span>Signo: {user.sexo}</span>
        <span>{user.idade} anos</span>

        <Button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-light btn-outline-dark btn-sm me-2">
          Editar Perfil
        </Button>
      </div>

      {showForm === true && <></>}

      {!isLoading && (
        <div className="mt-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Minhas Anotações</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Minhas Perguntas</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default Profile;
