import { useEffect, useState } from 'react';
import { Api } from '../../utils/api/api';
import { IControlSupply } from '../../utils/interfaces/index.entry';
import { Filtering } from '../../utils/filter/index.filter';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Loading } from '../../components/loading/index.loading';
import * as C from '../../styled-components/table/index.table';
import { FormCreateEntry } from '../../components/forms/form-create-entry/index.form-create-entry';
import { ModalControl } from '../../components/react-modal/modal-control/index.modal-control';

export function EntryPage() {
  const [filterEntry, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [entrys, setEntrys] = useState<IControlSupply[]>([]);
  const [entry, setEntry] = useState<IControlSupply | undefined>();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalIsOpen = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModalEntry, setIsOpenModalEntry] = useState(false);
  const modalIsOpenEntry = (id: string) => {
    const entry = entrys
      .filter(item => {
        return item.id === id;
      })
      .find(item => item);

    setEntry(entry);
    setIsOpenModalEntry(true);
  };

  const closeModalEntry = () => {
    setIsOpenModalEntry(false);
  };

  const findEntrys = async () => {
    try {
      const findEntrys = await Api.findAllEntry();
      setEntrys(findEntrys);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const includesFunc = (entry: IControlSupply) => {
    return entry.supply.nome.toLowerCase().includes(filterEntry.toLowerCase());
  };

  const filtering: IControlSupply[] = Filtering({
    data: entrys,
    filter: filterEntry,
    functionIncludes: includesFunc,
  });

  useEffect(() => {
    findEntrys();
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
                <C.ThConfig>Nome</C.ThConfig>
                <C.Th>Qtde</C.Th>
                <C.Th>Data</C.Th>
              </C.Tr>
            </C.Thead>
            <C.Tbody>
              {filtering.map((item, index) => {
                return (
                  <>
                    <C.Tr
                      key={index + 2}
                      onClick={() => {
                        modalIsOpenEntry(item.id);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <C.TdConfig display={true}>{item.id}</C.TdConfig>
                      <C.TdConfig>{item.supply.nome}</C.TdConfig>
                      <C.Td>{item.quant}</C.Td>
                      <C.Td>{item.data.split('T')[0]}</C.Td>
                    </C.Tr>
                  </>
                );
              })}
            </C.Tbody>
          </C.Table>
        )}
      </PatternSection>
      {/* <ModalControl
        closeModal={closeModalEntry}
        modalIsOpen={isOpenModalEntry}
        data={entry?.data.split('T')[0]}
        nome={entry?.supply.nome}
        quant={entry?.quant}
        key={entry?.id}
      /> */}
    </>
  );
}
