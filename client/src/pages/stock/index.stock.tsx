import { Header } from '../../components/header/index.header';
import { Main } from '../../components-styled/main/index.main';
import { TablesStock } from '../../components/table-stock/index.table';
import * as C from './style.stock';

export function StockPage() {
  return (
    <>
      <Header />
      <Main>
        <C.Section>
          <C.DivSectionS>
            <TablesStock />
          </C.DivSectionS>
        </C.Section>
      </Main>
    </>
  );
}
