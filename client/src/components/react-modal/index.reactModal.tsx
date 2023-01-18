import { CloseButton } from 'react-bootstrap';
import ReactModal from 'react-modal';
import { PropsReactModalC } from '../../utils/types/props.types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FormCreateSupply } from '../forms/index.createSupply';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    width: '85%',
    height: '80%',
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
        <CloseButton
          onClick={closeModal}
          style={{
            fontSize: '2.5rem',
          }}
        />
      </div>
      <FormCreateSupply />
    </ReactModal>
  );
}
