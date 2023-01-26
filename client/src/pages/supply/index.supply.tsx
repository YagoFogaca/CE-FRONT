import { useEffect, useState } from 'react';
import { Button, ButtonToolbar, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/index.header';
import { api } from '../../utils/api/api';
import { ISupplies } from '../../utils/interfaces/useState.interface';
import * as C from './style.supply';

export function SupplyPage() {
  const { id } = useParams();
  const [supply, setSupply] = useState<ISupplies>();

  const getById = async () => {
    const getSupply = await api.findByIdSpply(id);
    setSupply(getSupply);
  };

  const updateSupply = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const supply = {
      nome: event.currentTarget.nome.value,
      quant_estoque: +event.currentTarget.quant_estoque.value,
      unidade: event.currentTarget.unidade.value,
      ativo: event.currentTarget.ativo.value === 'Ativo' ? true : false,
    };

    await api.updateSupply(supply, id);
  };

  const deleteSupply = async () => {
    await api.deleteSupply(id);
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <>
      <Header />
      <C.SectionSupplyPage>
        <C.AsideSupplyPage>
          <div className="div-infos-1">
            <p>ID: {supply?.id}</p>
            <p>Nome: {supply?.nome}</p>
          </div>
          <div className="div-infos-2">
            <p>Quantidade em estoque: {supply?.quant_estoque}</p>
            <p>Unidade: {supply?.unidade}</p>
            <p>Ativo: {supply?.ativo ? 'ATIVO' : 'OBSOLETO'}</p>
          </div>

          <div>
            <Form onSubmit={updateSupply}>
              <Col className="mb-3">
                <Form.Group as={Col} controlId="nome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome do Insumo"
                    defaultValue={supply?.nome}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="quant_estoque">
                  <Form.Label>Quantidade em estoque</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    defaultValue={supply?.quant_estoque}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="unidade">
                  <Form.Label>Unidade</Form.Label>
                  <Form.Select defaultValue={supply?.unidade}>
                    <option value="m">Metros - M </option>
                    <option value="lt">Lata - LT</option>
                    <option value="cx">Caixa - CX</option>
                    <option value="pç">Peça - PÇ</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="ativo">
                  <Form.Label>Aplicavel</Form.Label>
                  <Form.Select
                    defaultValue={supply?.ativo ? 'ATIVO' : 'OBSOLETO'}
                  >
                    <option>Ativo</option>
                    <option>Obsoleto</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <ButtonToolbar className="mb-3">
                <Button variant="success" type="submit">
                  Atualizar
                </Button>
                <Button variant="danger" type="button" onClick={deleteSupply}>
                  Deletar
                </Button>
              </ButtonToolbar>
            </Form>
          </div>
        </C.AsideSupplyPage>
      </C.SectionSupplyPage>
    </>
  );
}
