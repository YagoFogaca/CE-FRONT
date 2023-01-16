import * as C from './style.sectionTable';
import { GrFormAdd } from 'react-icons/gr';
import { PropsSectionTable } from '../../utils/types/props.types';

export function SectionTable({ setFilter }: PropsSectionTable) {
  function filter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilter(event.currentTarget.search.value);
  }

  return (
    <C.SectionTableS>
      <form onSubmit={filter}>
        <input type="text" name="search" id="search" />
        <button>Buscar</button>
      </form>
      <C.BtnSectionTableS>
        <GrFormAdd />
      </C.BtnSectionTableS>
    </C.SectionTableS>
  );
}
