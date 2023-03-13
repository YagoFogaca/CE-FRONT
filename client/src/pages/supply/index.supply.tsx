import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Api } from '../../utils/api/api';
import { ISupply } from '../../utils/interfaces/index.supply';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { Form, Col, Button } from 'react-bootstrap';
import { Loading } from '../../components/loading/index.loading';
import './index.style.supply.css';

export function SupplyPage() {
  const [supply, setSupply] = useState<ISupply>();
  const [loading, setLoading] = useState(true);
  const [isLoadingDeleted, setIsLoadingDeleted] = useState(false);
  const [errorDeleted, setErrorDeleted] = useState(false);
  const [isLoadingUpdated, setIsLoadingUpdated] = useState(false);
  const [errorUpdated, setErrorUpdated] = useState(false);
  const [updateSupplyApi, setUpdateSupplyApi] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const findByIdSupply = async () => {
    try {
      const supply = await Api.findByIdSupply(id);
      setSupply(supply);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSupply = async () => {
    setErrorDeleted(false);
    setIsLoadingDeleted(true);
    try {
      await Api.deleteSupply(id);
      navigate('/controle/estoque');
    } catch (error) {
      console.log(error);
      setErrorDeleted(true);
    }
  };

  const updateSupply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoadingUpdated(true);
    try {
      const supplyUpdated = {
        nome: e.currentTarget.nome.value,
        quant_estoque: +e.currentTarget.quant_estoque.value,
        unidade: e.currentTarget.unidade.value,
        ativo: e.currentTarget.ativo.value === 'ativo' ? true : false,
      };
      await Api.updateSupply(id, supplyUpdated);
      setIsLoadingUpdated(false);
      setUpdateSupplyApi(!updateSupplyApi);
    } catch (error) {
      console.log(error);
      setErrorUpdated(true);
      setIsLoadingUpdated(false);
    }
  };

  useEffect(() => {
    findByIdSupply();
  }, [updateSupplyApi]);

  return (
    <>
      <PatternSection>
        {loading ? (
          <Loading />
        ) : (
          <>
            <section className="section-infos">
              <div className="div-infos-1">
                <p>ID: {supply?.id}</p>
                <p>Nome: {supply?.nome}</p>
              </div>
              <div className="div-infos-2">
                <p>Quantidade em estoque: {supply?.quant_estoque}</p>
                <p>Unidade: {supply?.unidade}</p>
                <p>Ativo: {supply?.ativo ? 'ATIVO' : 'OBSOLETO'}</p>
              </div>
            </section>
            <Form onSubmit={updateSupply}>
              <Form.Text
                className={
                  errorDeleted || errorUpdated ? 'form-textInvalide' : ''
                }
              >
                {errorDeleted
                  ? 'Ocorreu um erro ao deletar o insumo'
                  : 'Ocorreu um erro ao atualizar o insumo'}
              </Form.Text>
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
                <Form.Label>Ativo</Form.Label>
                <Form.Select
                  defaultValue={supply?.ativo ? 'ATIVO' : 'OBSOLETO'}
                >
                  <option value="ativo">Ativo</option>
                  <option value="obsoleto">Obsoleto</option>
                </Form.Select>
              </Form.Group>
              <div className="sectionBtn">
                <Button variant="success" type="submit">
                  {isLoadingUpdated ? 'Atualizando...' : 'Atualizar'}
                </Button>
                <Button variant="danger" type="button" onClick={deleteSupply}>
                  {isLoadingDeleted ? 'Deletando...' : 'Deletar'}
                </Button>
              </div>
            </Form>
          </>
        )}
      </PatternSection>
    </>
  );
}
