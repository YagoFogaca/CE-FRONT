import * as C from './style.sectionTable';
import { GrFormAdd } from 'react-icons/gr';
import CloseButton from 'react-bootstrap/CloseButton';
import ReactModal from 'react-modal';
import { PropsSectionTable } from '../../utils/types/props.types';
import { useState } from 'react';
import { ReactModalC } from '../react-modal/index.reactModal';

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

export function SectionTable({ setFilter }: PropsSectionTable) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  function filter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilter(event.currentTarget.search.value);
  }

  return (
    <>
      <C.SectionTableS>
        <C.FormSectionTableS onChange={filter}>
          <C.InputSectionTableS
            type="text"
            name="search"
            id="search"
            placeholder="Busque aqui..."
          />
        </C.FormSectionTableS>
        <C.BtnSectionTableS onClick={openModal}>
          <GrFormAdd />
        </C.BtnSectionTableS>
        <ReactModalC closeModal={closeModal} modalIsOpen={modalIsOpen} />
      </C.SectionTableS>
    </>
  );
}
