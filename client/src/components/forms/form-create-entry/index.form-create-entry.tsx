import { useState } from 'react';
import { PropsFormCreate } from '../../../utils/types/index.props';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.style.form-create.css';

export function FormCreateEntry({ closeModal }: PropsFormCreate) {
  const [validateQuantSupply, setValidateQuanSupply] = useState(false);
  const [validateProcessCreate, setValidateProcessCreate] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChangeQuant = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0) {
      setValidateQuanSupply(true);
    } else {
      setValidateQuanSupply(false);
    }
  };

  const createEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const entry = {
        id_user: localStorage.getItem('id_user'),
        id_supply: e.currentTarget.id_supply.value,
        quant: +e.currentTarget.quant.value,
        data: e.currentTarget.data.value,
      };

      // Chamar api
      //   setLoading(false);

      //   closeModal();
      setTimeout(() => {
        setLoading(false);

        closeModal();
      }, 10000);
    } catch (error) {
      console.log(error);
      setValidateProcessCreate(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={createEntry}>
        <Form.Text className={validateProcessCreate ? 'form-textInvalide' : ''}>
          Ocorreu um erro ao criar o insumo
        </Form.Text>
        <Form.Group className={'mb-3'} controlId="id_supply">
          <Form.Label>Nome insumo</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value="colocar id">A sla</option>
            <option value="lt">@ - LT</option>
            <option value="cx">3 - CX</option>
            <option value="pç">5 - PÇ</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className={'mb-3'} controlId="quant">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            defaultValue={1}
            className={validateQuantSupply ? 'invalidInput' : ''}
            onChange={handleChangeQuant}
          />
          <Form.Text className={validateQuantSupply ? 'form-textInvalide' : ''}>
            A entrada não pode ser menor ou igual a zero
          </Form.Text>
        </Form.Group>

        <Form.Group className={'mb-3'} controlId="data">
          <Form.Label>Data</Form.Label>
          <Form.Control type="datetime-local" />
        </Form.Group>

        <div className="sectionBtn">
          <Button
            variant="success"
            type="submit"
            disabled={validateQuantSupply || isLoading ? true : false}
          >
            {isLoading ? 'Criando...' : 'Criar'}
          </Button>

          <Button variant="danger" type="reset">
            Limpar
          </Button>
        </div>
      </Form>
    </>
  );
}
