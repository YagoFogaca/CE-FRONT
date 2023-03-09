import { useEffect, useState } from 'react';
import { Api } from '../../utils/api/api';
import { IControlSupply } from '../../utils/interfaces/index.entry';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Filtering } from '../../utils/filter/index.filter';
import { FormCreateEntry } from '../../components/forms/form-create-entry/index.form-create-entry';
import { Loading } from '../../components/loading/index.loading';
import * as C from '../../styled-components/table/index.table';

export function ExitPage() {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState<IControlSupply[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalIsOpen = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const includesFunc = (exit: IControlSupply) => {
    return exit.supply.nome.toLowerCase().includes(filter.toLowerCase());
  };
  const filtering: IControlSupply[] = Filtering({
    data: exit,
    filter: filter,
    functionIncludes: includesFunc,
  });

  const exits = async () => {
    try {
      const findExits = await Api.findAllExit();
      setExit(findExits);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    exits();
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
                  <C.Tr key={index}>
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
    </>
  );
}
