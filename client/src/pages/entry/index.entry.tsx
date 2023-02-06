import { DivSectionS } from '../../components-styled/div-section/index.div-section';
import { Main } from '../../components-styled/main/index.main';
import { Section } from '../../components-styled/section/index.section';
import { Header } from '../../components/header/index.header';
import { TableEntry } from '../../components/table-entry/index.table-entry';

export function EntryPage() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <DivSectionS>
            <TableEntry />
          </DivSectionS>
        </Section>
      </Main>
    </>
  );
}
