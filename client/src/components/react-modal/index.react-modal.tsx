import ReactModal from 'react-modal';
import { PropsModal } from '../../utils/types/index.props';

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

export function Modal({ closeModal, modalIsOpen, children }: PropsModal) {
  return (
    <>
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
          {/* <AiOutlineClose
            onClick={closeModal}
            style={{
              fontSize: '30px',
              color: '#ff1818',
              cursor: 'pointer',
            }}
          /> */}
        </div>
        {children}
      </ReactModal>
    </>
  );
}
