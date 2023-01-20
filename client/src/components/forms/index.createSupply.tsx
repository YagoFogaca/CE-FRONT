import { api } from '../../utils/api/api';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './style.forms.css';

export function FormCreateSupply() {
  const createSupply = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const supply = {
      id_user: localStorage.getItem('id_user'),
      nome: event.currentTarget.nome.value,
      quant_estoque: +event.currentTarget.quant_estoque.value,
      unidade: event.currentTarget.unidade.value,
      ativo: event.currentTarget.ativo.value === 'Ativo' ? true : false,
    };
    await api.createSupply(supply);
  };

  return (
    <Form onSubmit={createSupply}>
      <Col className="mb-3">
        <Form.Group as={Col} controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome do Insumo" />
        </Form.Group>

        <Form.Group as={Col} controlId="quant_estoque">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control defaultValue={0} type="number" placeholder="0" />
        </Form.Group>
        <Form.Group as={Col} controlId="unidade">
          <Form.Label>Unidade</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value="m">Metros - M </option>
            <option value="lt">Lata - LT</option>
            <option value="cx">Caixa - CX</option>
            <option value="pç">Peça - PÇ</option>
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
