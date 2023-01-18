import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './style.forms.css';

export function FormCreateSupply() {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();

        const supply = {
          nome: e.currentTarget.nome.value,
          quant_estoque: e.currentTarget.quant_estoque.value,
          unidade: e.currentTarget.unidade.value,
          ativo: e.currentTarget.ativo.value,
        };
        console.log(supply);
      }}
    >
      <Col className="mb-3">
        <Form.Group as={Col} controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome do Insumo" />
        </Form.Group>

        <Form.Group as={Col} controlId="quant_estoque">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control type="number" placeholder="0" />
        </Form.Group>
        <Form.Group as={Col} controlId="unidade">
          <Form.Label>Unidade</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Metros - M </option>
            <option>Lata - LT</option>
            <option>Caixa - CX</option>
            <option>Peça - PÇ</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="ativo">
          <Form.Label>Aplicavel</Form.Label>
          <Form.Select>
            <option>Ativo</option>
            <option>Obsoleto</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <ButtonToolbar className="mb-3">
        <Button variant="success" type="submit">
          Criar
        </Button>
        <Button variant="danger" type="reset">
          Limpar
        </Button>
      </ButtonToolbar>
    </Form>
  );
}
