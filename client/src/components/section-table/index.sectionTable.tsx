import * as C from './style.sectionTable';
import { GrFormAdd, GrSearch } from 'react-icons/gr';
import { PropsSectionTable } from '../../utils/types/props.types';
import { BtnS } from '../../components-styled/btn/index.btn';

export function SectionTable({ setFilter }: PropsSectionTable) {
  function filter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilter(event.currentTarget.search.value);
  }

  return (
    <C.SectionTableS>
      <C.FormSectionTableS onSubmit={filter}>
        <C.InputSectionTableS type="text" name="search" id="search" />
        <BtnS>
          Buscar <GrSearch />
        </BtnS>
      </C.FormSectionTableS>
      <C.BtnSectionTableS>
        <GrFormAdd />
      </C.BtnSectionTableS>
    </C.SectionTableS>
  );
}
