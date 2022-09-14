import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

function EditUser({
  form,
  id,
  setShowForm,
  setForm,
  reload,
  setReload,
  showForm,
}) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete form._id;

      await axios.put(
        `https://ironrest.herokuapp.com/jungle-wd-85-profile/${id}`,
        form
      );

      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/jungle-wd-85-profile/${id}`
      );

      navigate("/profiles");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(id);

  return (
    <Modal show={showForm} onHide={() => setShowForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edite seu Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Nome</Form.Label>
          <Form.Control name="nome" value={form.nome} onChange={handleChange} />

          <Form.Label>Idade</Form.Label>
          <Form.Control
            name="idade"
            value={form.idade}
            onChange={handleChange}
          />

          {/*   <Form.Label>Signo</Form.Label>
          <Form.Control name="moradia" value={form.moradia} onChange={handleChange} /> */}

          <Form.Label>Moradia</Form.Label>
          <Form.Select
            name="moradia"
            onChange={handleChange}
            defaultValue={form.moradia}>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Sítio">Sítio</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          variant="danger"
          className="text-light fw-semibold"
          onClick={handleDelete}
          size="sm">
          Delete esse perfil
        </Button>
        <Button
          variant="success"
          onClick={handleSubmit}
          className="text-light fw-semibold"
          size="sm">
          {" "}
          Salvar{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditUser;
