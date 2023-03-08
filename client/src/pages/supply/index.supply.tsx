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
  const [isLoading, setIsLoading] = useState(false);
  const [errorDeleted, setErrorDeleted] = useState(false);
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
    setIsLoading(true);
    try {
      // Deve deletar no context
      const supplyDeleted = await Api.deleteSupply(id);
      console.log(supplyDeleted);
      navigate('/controle/estoque');
    } catch (error) {
      console.log(error);
      setErrorDeleted(true);
    }
  };

  useEffect(() => {
    findByIdSupply();
  }, []);

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
            <Form>
              <Form.Text className={errorDeleted ? 'form-textInvalide' : ''}>
                Ocorreu um erro ao deletar o insumo
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
                  <option>Ativo</option>
                  <option>Obsoleto</option>
                </Form.Select>
              </Form.Group>
              <div className="sectionBtn">
                <Button variant="success" type="submit">
                  Atualizar
                </Button>
                <Button variant="danger" type="button" onClick={deleteSupply}>
                  {isLoading ? 'Deletando...' : 'Deletar'}
                </Button>
              </div>
            </Form>
          </>
        )}
      </PatternSection>
    </>
  );
}
