import { GrFormAdd } from 'react-icons/gr';
import { PropsFormSectionTable } from '../../utils/types/props.types';
import * as C from './style.form-table';

export function FormSectionTable({
  setFilter,
  openModal,
}: PropsFormSectionTable) {
  function filter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilter(event.currentTarget.search.value);
  }

  return (
    <>
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
    </>
  );
}
