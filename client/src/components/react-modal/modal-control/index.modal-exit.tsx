import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { PropsModalControl } from '../../../utils/types/index.props';
import { Form, Button } from 'react-bootstrap/';
import * as C from '../../../styled-components/section-modal/index.section-modal';
import { useContext, useState } from 'react';
import { supplyContext } from '../../../context/supply.context';
import { Api } from '../../../utils/api/api';

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

export function ModalExit({
  closeModal,
  modalIsOpen,
  data,
}: PropsModalControl) {
  const { suppleis } = useContext(supplyContext);
  const [validateDataExit, setvalidateDataExit] = useState(true);
  const [validateQuantSupply, setValidateQuanSupply] = useState(false);
  const [isLoadingDeleted, setIsLoadingDeleted] = useState(false);
  const [isLoadingUpdated, setIsLoadingUpdated] = useState(false);
  const handleChangeQuant = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0) {
      setValidateQuanSupply(true);
    } else {
      setValidateQuanSupply(false);
    }
  };

  const deletedExit = async () => {
    try {
      setIsLoadingDeleted(true);
      await Api.deleteExit(data.id);
      setIsLoadingDeleted(false);
      closeModal();
    } catch (error) {
      setIsLoadingDeleted(false);
      console.log(error);
    }
  };

  const updatedExit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoadingUpdated(true);
      const exitUpdated = {
        id_supply: e.currentTarget.id_supply.value,
        quant: +e.currentTarget.quant.value,
        data: e.currentTarget.data.value + ':00.843Z',
      };
      console.log(await Api.updateExit(data.id, exitUpdated));
      setIsLoadingUpdated(false);
      // closeModal();
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
        <C.H6SectionInfosModal>Insumo: {data.nome}</C.H6SectionInfosModal>
        <C.H6SectionInfosModal>Quantidade: {data.quant}</C.H6SectionInfosModal>
        <C.H6SectionInfosModal>
          Data: {data?.data?.split('T')[0]}
        </C.H6SectionInfosModal>
      </C.SectionInfosModal>
      <Form onSubmit={updatedExit}>
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
          <Button variant="success" type="submit" disabled={true}>
            {isLoadingUpdated ? 'Atualizando...' : 'Atualizar'}
          </Button>

          <Button variant="danger" type="reset" onClick={deletedExit}>
            {isLoadingDeleted ? 'Deletando...' : 'Deletar'}
          </Button>
        </div>
      </Form>
    </ReactModal>
  );
}
