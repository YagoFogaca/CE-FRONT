import { useState } from 'react';
import { Api } from '../../utils/api/api';
import { PropsFormCreateSupply } from '../../utils/types/index.props';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.style.form-create-supply.css';

export function FormCreateSupply({ closeModal }: PropsFormCreateSupply) {
  const [validateNameSupply, setValidateNameSupply] = useState(false);
  const [validateQuantSupply, setValidateQuanSupply] = useState(false);
  const [validateProcessCreate, setValidateProcessCreate] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length < 3) {
      setValidateNameSupply(true);
    } else {
      setValidateNameSupply(false);
    }
  };

  const handleChangeQuant = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value < 0) {
      setValidateQuanSupply(true);
    } else {
      setValidateQuanSupply(false);
    }
  };

  const createSupply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const supply = {
        nome: e.currentTarget.nome.value,
        quant_estoque: +e.currentTarget.quant_estoque.value,
        unidade: e.currentTarget.unidade.value,
        ativo: e.currentTarget.ativo.value === 'ativo' ? true : false,
        id_user: localStorage.getItem('id_user'),
      };

      await Api.createSupply(supply);

      closeModal();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setValidateProcessCreate(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={createSupply}>
        <Form.Text className={validateProcessCreate ? 'form-textInvalide' : ''}>
          Ocorreu um erro ao criar o insumo
        </Form.Text>
        <Form.Group className={'mb-3'} controlId="nome">
          <Form.Label>Nome insumo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            className={validateNameSupply ? 'invalidInput' : ''}
            onChange={handleChangeName}
          />
          <Form.Text className={validateNameSupply ? 'form-textInvalide' : ''}>
            O nome do insumo não pode ser menor que 3 caracteres
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="quant_estoque">
          <Form.Label>Quantidade de estoque</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            className={validateQuantSupply ? 'invalidInput' : ''}
            onChange={handleChangeQuant}
          />
          <Form.Text className={validateQuantSupply ? 'form-textInvalide' : ''}>
            A quantidade em estoque do insumo não pode ser menor que 0
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="unidade">
          <Form.Label>Unidade</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value="m">Metros - M </option>
            <option value="lt">Lata - LT</option>
            <option value="cx">Caixa - CX</option>
            <option value="pç">Peça - PÇ</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ativo">
          <Form.Label>Ativo</Form.Label>
          <Form.Select>
            <option value="ativo">Ativo</option>
            <option value="obsoleto">Obsoleto</option>
          </Form.Select>
        </Form.Group>

        <div className="sectionBtn">
          <Button
            variant="success"
            type="submit"
            disabled={
              validateQuantSupply || validateNameSupply || isLoading
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
