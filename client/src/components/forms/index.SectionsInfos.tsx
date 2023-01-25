import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './style.forms.css';

export function FormSectionInfos() {
  return (
    <Form className="formSection">
      <Form.Group controlId="nome">
        <Form.Label className="labelSection">Nome do insumo</Form.Label>
        <Form.Control type="text" placeholder="Nome do Insumo" />
      </Form.Group>
      <Form.Group controlId="nome">
        <Form.Label className="labelSection">Qtde maior que</Form.Label>
        <Form.Control type="number" placeholder="10" />
      </Form.Group>
      <ButtonToolbar className="mb-3 marginFormat">
        <Button variant="success" type="submit">
          Buscar
        </Button>
      </ButtonToolbar>
    </Form>
  );
}
