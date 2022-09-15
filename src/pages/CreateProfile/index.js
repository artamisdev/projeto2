
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import createImage from '../../assets/02 - Criar Perfil.png'
import toast, {Toaster} from "react-hot-toast"


const notify = () => toast.success('Perfil salvo.');


function CreateProfile() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    moradia: "",
    garden: [],
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
    <div style={{display:"flex",
      marginLeft:"25px",
      marginRight:"25px",
      alignItems: "center",
    justifyContent: "space-between",
    }}>
      <h4 className="createSubtitle">Crie seu perfil</h4>
      <img className="createImg" src={createImage} alt="imagem"/>
    </div>

    <div className="createFormBackground">
    <div className="createForm">
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
          <Form.Label className="fs-4 text-muted">Moradia</Form.Label>
          <Form.Select
            className="fs-5 text-muted"
            name="moradia"
            onChange={handleChange}
            defaultValue={form.moradia}>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Sítio">Escritório</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-center">
        <Toaster />
          <Button
            onClick={notify}
            variant="success"
            size="md"
            type="submit"
            style={{ width: "100px" }}>
            Salvar
          </Button>
        </div>
      </Form>
    </div>
    </div>
    </div>
  );
}

export default CreateProfile;
