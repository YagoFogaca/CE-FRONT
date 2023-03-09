import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { PropsModalControl } from '../../../utils/types/index.props';
import * as C from '../../../styled-components/section-modal/index.section-modal';

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
}: PropsModalControl) {
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
        <h6>Insumo: {nome}</h6>
        <h6>Quantidade de saida: {quant}</h6>
        <h6>Data: {data?.split('T')[0]}</h6>
      </C.SectionInfosModal>
    </ReactModal>
  );
}
