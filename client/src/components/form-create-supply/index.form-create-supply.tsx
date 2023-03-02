import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.style.form-create-supply.css';

export function FormCreateSupply() {
  const [validateNameSupply, setValidateNameSupply] = useState(false);
  const [validateQuantSupply, setValidateQuanSupply] = useState(false);
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value.length < 3) {
      setValidateNameSupply(true);
    } else {
      setValidateNameSupply(false);
    }
  };

  const handleChangeQuant = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    if (+e.currentTarget.value < 0) {
      console.log(false);
      setValidateQuanSupply(true);
    } else {
      console.log(false);
      setValidateQuanSupply(false);
    }
  };

  const createSupply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const supply = {
        nome: e.currentTarget.nome.value,
        quant_estoque: +e.currentTarget.quant_estoque.value,
        unidade: e.currentTarget.unidade.value,
        ativo: e.currentTarget.ativo.value,
        id_user: localStorage.getItem('id_user'),
      };

      console.log(supply);
    } catch (error) {}
  };

  return (
    <>
      <Form onSubmit={createSupply}>
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
            disabled={validateQuantSupply || validateNameSupply ? true : false}
          >
            Criar
          </Button>

          <Button variant="danger" type="reset">
            Limpar
          </Button>
        </div>
      </Form>
    </>
  );
}
