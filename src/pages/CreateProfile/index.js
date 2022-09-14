import NavBar from "../../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function CreateProfile() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    sexo: "",
    garden: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(
        "https://ironrest.herokuapp.com/jungle-wd-85-profile",
        form
      );
      navigate("/profiles");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <div className="d-flex flex-column">
      <h4 className="text-center">Crie seu perfil no nosso site</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-start text-muted fs-4 ">Nome</Form.Label>
          <Form.Control
            size="lg"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 text-muted">Idade</Form.Label>
          <Form.Control
            size="lg"
            name="idade"
            value={form.idade}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 text-muted">Sexo</Form.Label>
          <Form.Control
            size="lg"
            name="sexo"
            value={form.sexo}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button
            variant="success"
            size="md"
            type="submit"
            style={{ width: "100px" }}>
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateProfile;
