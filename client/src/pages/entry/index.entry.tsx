import { useEffect, useState } from 'react';
import { Api } from '../../utils/api/api';
import { IEntry } from '../../utils/interfaces/index.entry';
import { Filtering } from '../../utils/filter/index.filter';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Loading } from '../../components/loading/index.loading';
import * as C from '../../styled-components/table/index.table';
import { FormCreateEntry } from '../../components/forms/form-create-entry/index.form-create-entry';

export function EntryPage() {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState<IEntry[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalIsOpen = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const entrys = async () => {
    try {
      const findEntrys = await Api.findAllEntry();
      setEntry(findEntrys);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const includesFunc = (entry: IEntry) => {
    return entry.supply.nome.toLowerCase().includes(filter.toLowerCase());
  };

  const filtering: IEntry[] = Filtering({
    data: entry,
    filter: filter,
    functionIncludes: includesFunc,
  });

  useEffect(() => {
    entrys();
  }, [isOpenModal]);

  return (
    <>
      <PatternSection>
        <SectionFilter
          setFilter={setFilter}
          closeModal={closeModal}
          isOpenModal={isOpenModal}
          modalIsOpen={modalIsOpen}
          children={<FormCreateEntry closeModal={closeModal} />}
        />
        {loading ? (
          <Loading />
        ) : (
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
            <C.Tbody>
              {filtering.map((item, index) => {
                return (
                  <C.Tr key={index}>
                    <C.TdConfig display={true}>{item.id}</C.TdConfig>
                    <C.TdConfig>{item.supply.nome}</C.TdConfig>
                    <C.Td>{item.quant}</C.Td>
                    <C.Td>{item.data}</C.Td>
                  </C.Tr>
                );
              })}
            </C.Tbody>
          </C.Table>
        )}
      </PatternSection>
    </>
  );
}
