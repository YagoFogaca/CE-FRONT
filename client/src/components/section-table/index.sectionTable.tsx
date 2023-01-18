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
      <C.FormSectionTableS onChange={filter}>
        <C.InputSectionTableS
          type="text"
          name="search"
          id="search"
          placeholder="Busque aqui..."
        />
      </C.FormSectionTableS>
      <C.BtnSectionTableS>
        <GrFormAdd />
      </C.BtnSectionTableS>
    </C.SectionTableS>
  );
}
