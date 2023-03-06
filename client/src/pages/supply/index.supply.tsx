import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { Form, Col, Button } from 'react-bootstrap';
import './index.style.supply.css';

export function SupplyPage() {
  return (
    <>
      <PatternSection>
        <section className="section-infos">
          <div className="div-infos-1">
            {/* <p>ID: {supply?.id}</p>
            <p>Nome: {supply?.nome}</p> */}
            <p>ID: 151535132321321sda31d1as51d5as1d56asd</p>
            <p>Nome: DISCO DE CORTE 7"</p>
          </div>
          <div className="div-infos-2">
            {/* <p>Quantidade em estoque: {supply?.quant_estoque}</p>
            <p>Unidade: {supply?.unidade}</p>
            <p>Ativo: {supply?.ativo ? 'ATIVO' : 'OBSOLETO'}</p> */}

            <p>Quantidade em estoque: 35</p>
            <p>Unidade: pç</p>
            <p>Ativo: ativo</p>
          </div>
        </section>

        <Form>
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do Insumo"
              // defaultValue={supply?.nome}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="quant_estoque">
            <Form.Label>Quantidade em estoque</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              // defaultValue={supply?.quant_estoque}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="unidade">
            <Form.Label>Unidade</Form.Label>
            {/* <Form.Select defaultValue={supply?.unidade}> */}
            <Form.Select>
              <option value="m">Metros - M </option>
              <option value="lt">Lata - LT</option>
              <option value="cx">Caixa - CX</option>
              <option value="pç">Peça - PÇ</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="ativo">
            <Form.Label>Aplicavel</Form.Label>
            {/* defaultValue={supply?.ativo ? 'ATIVO' : 'OBSOLETO'} */}
            <Form.Select>
              <option>Ativo</option>
              <option>Obsoleto</option>
            </Form.Select>
          </Form.Group>
          <div className="sectionBtn">
            <Button variant="success" type="submit">
              Atualizar
            </Button>
            <Button variant="danger" type="button">
              Deletar
            </Button>
          </div>
        </Form>
      </PatternSection>
    </>
  );
}
