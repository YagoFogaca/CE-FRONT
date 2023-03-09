import { useState, useContext } from 'react';
import { supplyContext } from '../../../context/supply.context';
import { Api } from '../../../utils/api/api';
import { PropsFormCreate } from '../../../utils/types/index.props';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.style.form-create.css';

export function FormCreateExit({ closeModal }: PropsFormCreate) {
  const { suppleis } = useContext(supplyContext);
  const [validateDataExit, setvalidateDataExit] = useState(true);
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

  const createExit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const exit = {
        id_user: localStorage.getItem('id_user'),
        id_supply: e.currentTarget.id_supply.value,
        quant: +e.currentTarget.quant.value,
        data: e.currentTarget.data.value + ':00.843Z',
      };

      await Api.createExit(exit);
      setLoading(false);
      closeModal();
    } catch (error) {
      console.log(error);
      setValidateProcessCreate(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={createExit}>
        <Form.Text className={validateProcessCreate ? 'form-textInvalide' : ''}>
          Ocorreu um erro ao criar a saida do insumo
        </Form.Text>
        <Form.Group className={'mb-3'} controlId="id_supply">
          <Form.Label>Nome insumo</Form.Label>
          <Form.Select defaultValue="Choose...">
            {suppleis.map((supply, index) => {
              return (
                <option value={supply.id} key={index}>
                  {supply.nome}
                </option>
              );
            })}
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
            A saida não pode ser menor ou igual a zero
          </Form.Text>
        </Form.Group>

        <Form.Group className={'mb-3'} controlId="data">
          <Form.Label>Data</Form.Label>
          <Form.Control
            className={validateDataExit ? 'invalidInput' : ''}
            type="datetime-local"
            onChange={e => {
              if (e.currentTarget.value.length >= 1) {
                setvalidateDataExit(false);
              } else {
                setvalidateDataExit(true);
              }
            }}
          />
          <Form.Text className={validateDataExit ? 'form-textInvalide' : ''}>
            Você precisa informar uma data
          </Form.Text>
        </Form.Group>

        <div className="sectionBtn">
          <Button
            variant="success"
            type="submit"
            disabled={
              validateQuantSupply || isLoading || validateDataExit
                ? true
                : false
            }
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
