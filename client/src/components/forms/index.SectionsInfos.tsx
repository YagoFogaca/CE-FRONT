import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './style.forms.css';
import { PropsFormSectionInfosC } from '../../utils/types/props.types';

export function FormSectionInfos({ setFilter }: PropsFormSectionInfosC) {
  const supplyEntrySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = {
      nome: event.currentTarget.nome.value,
      quant: 0,
    };
    setFilter(search);
  };

  return (
    <Form className="formSection" onSubmit={supplyEntrySearch}>
      <Form.Group controlId="nome">
        <Form.Label className="labelSection">Nome do insumo</Form.Label>
        <Form.Control type="text" placeholder="Nome do Insumo" />
        {/* <Form.Select>
          <option>Default select</option>
        </Form.Select> */}
      </Form.Group>
      {/* <Form.Group controlId="quantidade">
        <Form.Label className="labelSection">Qtde maior que</Form.Label>
        <Form.Control type="number" placeholder="10" />
      </Form.Group> */}
      <ButtonToolbar className="mb-3 marginFormat">
        <Button variant="success" type="submit">
          Buscar
        </Button>
      </ButtonToolbar>
    </Form>
  );
}
