import { useState } from 'react';
import { Button, ButtonToolbar, Form, Col } from 'react-bootstrap';
import { api } from '../../utils/api/api';
import { PropsReactModalC } from '../../utils/types/props.types';
import './style.forms.css';

export function FormCreateEntry() {
  const [errorCreateSypply, SetErrorCreateSypply] = useState(false);
  const supplyEntrySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entry = {
      id_user: localStorage.getItem('id_user'),
      id_supply: event.currentTarget.id_supply.value,
      quant: +event.currentTarget.quant.value,
      data: event.currentTarget.data.value,
    };

    console.log(entry);
  };

  return (
    <Form onSubmit={supplyEntrySearch}>
      <Col className="mb-3">
        {errorCreateSypply ? (
          <Form.Text className="text-muted error-create-sypply">
            O nome do insumo não pode ser menor ou igual a 3 caracteres
          </Form.Text>
        ) : (
          <></>
        )}

        <Form.Group as={Col} controlId="id_supply">
          <Form.Label>Insumo</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value="1">Insumo - 1</option>
            <option value="2">Insumo - 2</option>
            <option value="3">Insumo - 3</option>
            <option value="4">Insumo - 4</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="quant">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control defaultValue={0} type="number" placeholder="0" />
        </Form.Group>
        <Form.Group as={Col} controlId="data">
          <Form.Label>Data</Form.Label>
          <Form.Control type="datetime-local" placeholder="0" />
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
