import { useEffect, useState } from 'react';
import { Api } from '../../utils/api/api';
import { IControlSupply } from '../../utils/interfaces/index.entry';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Filtering } from '../../utils/filter/index.filter';
import { FormCreateExit } from '../../components/forms/form-create-exit/index.form-create-exit';
import { Loading } from '../../components/loading/index.loading';
import * as C from '../../styled-components/table/index.table';
import { ModalEntry } from '../../components/react-modal/modal-control/index.modal-entry';
import { ModalExit } from '../../components/react-modal/modal-control/index.modal-exit';

export function ExitPage() {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [exits, setExits] = useState<IControlSupply[]>([]);
  const [exit, setExit] = useState<IControlSupply | undefined>();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalIsOpen = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenModalExit, setIsOpenModalExit] = useState(false);
  const modalIsOpenExit = (id: string) => {
    const exit = exits
      .filter(item => {
        return item.id === id;
      })
      .find(item => item);

    setExit(exit);
    setIsOpenModalExit(true);
  };

  const closeModalExit = () => {
    setIsOpenModalExit(false);
  };

  const includesFunc = (exit: IControlSupply) => {
    return exit.supply.nome.toLowerCase().includes(filter.toLowerCase());
  };
  const filtering: IControlSupply[] = Filtering({
    data: exits,
    filter: filter,
    functionIncludes: includesFunc,
  });

  const findAllExits = async () => {
    try {
      const findExits = await Api.findAllExit();
      setExits(findExits);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findAllExits();
  }, [isOpenModal]);

  return (
    <>
      <PatternSection>
        <SectionFilter
          setFilter={setFilter}
          closeModal={closeModal}
          isOpenModal={isOpenModal}
          modalIsOpen={modalIsOpen}
          children={<FormCreateExit closeModal={closeModal} />}
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
                  <C.Tr
                    key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      modalIsOpenExit(item.id);
                    }}
                  >
                    <C.TdConfig display={true}>{item.id}</C.TdConfig>
                    <C.TdConfig>{item.supply.nome}</C.TdConfig>
                    <C.Td>{item.quant}</C.Td>
                    <C.Td>{item.data.split('T')[0]}</C.Td>
                  </C.Tr>
                );
              })}
            </C.Tbody>
          </C.Table>
        )}
      </PatternSection>
      <ModalExit
        closeModal={closeModalExit}
        data={{
          data: exit?.data,
          nome: exit?.supply.nome,
          quant: exit?.quant,
          id: exit?.id,
        }}
        modalIsOpen={isOpenModalExit}
      />
    </>
  );
}
