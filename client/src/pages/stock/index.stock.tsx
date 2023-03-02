import { useEffect, useState } from 'react';
import { ISupply } from '../../utils/interfaces/index.supply';
import { Api } from '../../utils/api/api';
import { Filtering } from '../../utils/filter/index.filter';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Loading } from '../../components/loading/index.loading';
import { FormCreateSupply } from '../../components/form-create-supply/index.form-create-supply';
import * as C from '../../styled-components/table/index.table';

export function StockPage() {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [supply, setSupply] = useState<ISupply[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalIsOpen = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const findSupplies = async () => {
    try {
      const supplies = await Api.findALLSupplies();
      setSupply(supplies);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filtering = Filtering({ data: supply, filter: filter });

  useEffect(() => {
    findSupplies();
  }, [isOpenModal]);

  return (
    <>
      <PatternSection>
        <SectionFilter
          setFilter={setFilter}
          closeModal={closeModal}
          isOpenModal={isOpenModal}
          modalIsOpen={modalIsOpen}
          children={<FormCreateSupply closeModal={closeModal} />}
        />

        {loading ? (
          <Loading />
        ) : (
          <C.Table>
            <C.Thead>
              <C.Tr>
                <C.ThConfig display={true}>Cod</C.ThConfig>
                <C.ThConfig>Nome</C.ThConfig>
                <C.Th>Qtde Esoque</C.Th>
                <C.Th>Unid</C.Th>
                <C.Th display={true}>Ativo</C.Th>
              </C.Tr>
            </C.Thead>
            <C.Tbody>
              {filtering.map((item, index) => {
                return (
                  <C.Tr key={index}>
                    <C.TdConfig display={true}>{item.id}</C.TdConfig>
                    <C.TdConfig>{item.nome}</C.TdConfig>
                    <C.Td>{item.quant_estoque}</C.Td>
                    <C.Td>{item.unidade.toUpperCase()}</C.Td>
                    <C.Td display={true}>
                      {item.ativo ? 'ATIVO' : 'OBSOLETO'}
                    </C.Td>
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
