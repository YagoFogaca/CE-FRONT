import { mocks } from '../../mocks';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { SectionFilter } from '../../components/section-filter/index.section-filter';
import { Loading } from '../../components/loading/index.loading';
import * as C from '../../styled-components/table/index.table';

export function StockPage() {
  return (
    <>
      <PatternSection>
        <SectionFilter />
        {/* <Loading /> */}
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
            {mocks.map((item, index) => {
              return (
                <C.Tr key={index}>
                  <C.TdConfig display={true}>{item.id}</C.TdConfig>
                  <C.TdConfig>{item.nome}</C.TdConfig>
                  <C.Td>{item.quant_estoque}</C.Td>
                  <C.Td>{item.unidade}</C.Td>
                  <C.Td display={true}>
                    {item.ativo ? 'Ativo' : 'Obsoleto'}
                  </C.Td>
                </C.Tr>
              );
            })}
          </C.Tbody>
        </C.Table>
      </PatternSection>
    </>
  );
}
