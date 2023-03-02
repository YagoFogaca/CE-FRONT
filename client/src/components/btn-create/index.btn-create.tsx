import { useState } from 'react';
import { TbFolderPlus } from 'react-icons/tb';
import { PropsBtnCreate } from '../../utils/types/index.props';
import { Modal } from '../react-modal/index.react-modal';
import './index.style-btn-create.css';

export function BtnCreate({ children }: PropsBtnCreate) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalIsOpen = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="card-btnCreate">
        <button className="btnCreate" type="submit" onClick={modalIsOpen}>
          <TbFolderPlus />
        </button>
        <div className="infoBtn">Criar</div>
      </div>
      <Modal
        closeModal={closeModal}
        modalIsOpen={isOpenModal}
        children={children}
      />
    </>
  );
}
