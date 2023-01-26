import { useState } from 'react';
import { Header } from '../../components/header/index.header';
import { Main } from '../../components-styled/main/index.main';
import { DivBtn } from '../../components/div-btn/index.divBtn';
import { TablesStock } from '../../components/table-stock/index.table';
import * as C from './style.control';

export function ControlPage() {
  const [view, setView] = useState({
    estoque: true,
    saida: false,
    entrada: false,
  });

  return (
    <>
      <Header />
      <Main>
        <DivBtn view={view} setView={setView} />
        <C.Section>
          <C.DivSectionS>
            {view.saida ? (
              <h1>Em desenvolvimento</h1>
            ) : view.entrada ? (
              <h1>Em desenvolvimento</h1>
            ) : (
              <TablesStock />
            )}
          </C.DivSectionS>
        </C.Section>
      </Main>
    </>
  );
}
