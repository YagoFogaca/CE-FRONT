import { Header } from '../../components/header/index.header';
import { Main } from '../../components-styled/main/index.main';
import { Section } from '../../components-styled/section/index.section';
import { DivSectionS } from '../../components-styled/div-section/index.div-section';
import { TablesStock } from '../../components/table-stock/index.table';

export function StockPage() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <DivSectionS>
            <TablesStock />
          </DivSectionS>
        </Section>
      </Main>
    </>
  );
}
