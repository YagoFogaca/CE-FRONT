import { useState, useContext } from 'react';
import { supplyContext } from '../../contexts/supply.context';
import { Button, ButtonToolbar, Form, Col } from 'react-bootstrap';
import { api } from '../../utils/api/api';
import { PropsReactModalC } from '../../utils/types/props.types';
import './style.forms.css';

export function FormCreateEntry({ closeModal }: PropsReactModalC) {
  const { suppleis } = useContext(supplyContext);

  const [errorCreateSypply, SetErrorCreateSypply] = useState(false);
  const supplyEntrySearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const entry = {
        id_user: localStorage.getItem('id_user'),
        id_supply: event.currentTarget.id_supply.value,
        quant: +event.currentTarget.quant.value,
        data: event.currentTarget.data.value + ':00.843Z',
      };
      await api.createEntry(entry);
      closeModal();
    } catch (error) {
      alert('Erro ao criar um entrada');
      SetErrorCreateSypply(true);
      console.log(error);
    }
  };

  return (
    <Form onSubmit={supplyEntrySearch}>
      <Col className="mb-3">
        {errorCreateSypply ? (
          <Form.Text className="text-muted error-create-sypply">
            Quantidade de entrada inválida
          </Form.Text>
        ) : (
          <></>
        )}

        <Form.Group as={Col} controlId="id_supply">
          <Form.Label>Insumo</Form.Label>
          <Form.Select defaultValue="Choose...">
            {suppleis.map((supply, index) => {
              return (
                <option key={index} value={supply.id}>
                  {supply.nome}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="quant">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control type="number" placeholder="0" />
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
