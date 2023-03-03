import { useEffect, useState } from 'react';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Loading } from '../../components/loading/index.loading';
import * as C from '../../styled-components/table/index.table';

export function EntryPage() {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalIsOpen = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <PatternSection>
        <SectionFilter
          setFilter={setFilter}
          closeModal={closeModal}
          isOpenModal={isOpenModal}
          modalIsOpen={modalIsOpen}
          children={<h1>Olá</h1>}
        />
        {/* <Loading /> */}
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.ThConfig display={true}>Cod</C.ThConfig>
              <C.ThConfig display={true}>Nome</C.ThConfig>
              <C.Th>Qtde</C.Th>
              <C.Th>Data</C.Th>
              <C.Th display={true}></C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody></C.Tbody>
        </C.Table>
      </PatternSection>
    </>
  );
}
