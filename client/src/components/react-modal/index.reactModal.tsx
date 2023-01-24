import { AiOutlineClose } from 'react-icons/ai';
import ReactModal from 'react-modal';
import { PropsReactModalC } from '../../utils/types/props.types';
import { FormCreateSupply } from '../forms/index.createSupply';

ReactModal.setAppElement('#root');

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
    backgroundColor: '#000000a3',
  },
};

export function ReactModalC({ closeModal, modalIsOpen }: PropsReactModalC) {
  return (
    <ReactModal
      preventScroll
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <AiOutlineClose
          onClick={closeModal}
          style={{
            fontSize: '3.5rem',
            color: '#ff1818',
            cursor: 'pointer',
          }}
        />
      </div>
      <FormCreateSupply />
    </ReactModal>
  );
}
