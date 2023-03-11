import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { PropsModalControl } from '../../../utils/types/index.props';
import { Form, Button } from 'react-bootstrap/';
import * as C from '../../../styled-components/section-modal/index.section-modal';
import { useContext, useState } from 'react';
import { supplyContext } from '../../../context/supply.context';

const customStyles = {
  content: {
    width: '85%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: '#000000e2',
  },
};

export function ModalControl({
  closeModal,
  modalIsOpen,
  nome,
  data,
  quant,
  updateControl,
}: PropsModalControl) {
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

  const deletedControl = async () => {};

  const updatedControl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReactModal
      preventScroll
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <C.SectionModal>
        <AiOutlineClose
          onClick={closeModal}
          style={{
            fontSize: '30px',
            color: '#ff1818',
            cursor: 'pointer',
          }}
        />
      </C.SectionModal>
      <C.SectionInfosModal>
        <C.H6SectionInfosModal>Insumo: {nome}</C.H6SectionInfosModal>
        <C.H6SectionInfosModal>Quantidade: {quant}</C.H6SectionInfosModal>
        <C.H6SectionInfosModal>
          Data: {data?.split('T')[0]}
        </C.H6SectionInfosModal>
      </C.SectionInfosModal>
      <Form onSubmit={updatedControl}>
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
    </ReactModal>
  );
}
