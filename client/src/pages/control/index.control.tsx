import * as C from './style.control';
import { Main } from '../../components-styled/main/index.main';
import { useState } from 'react';
import { DivBtn } from '../../components/div-btn/index.divBtn';
import { TablesStock } from '../../components/table-stock/index.table';

export function ControlPage() {
  const [view, setView] = useState({
    estoque: true,
    saida: false,
    entrada: false,
  });

  return (
    <Main>
      <DivBtn view={view} setView={setView} />
      <C.Section>
        <C.DivSectionS>
          {view.saida ? (
            <h1>Saida</h1>
          ) : view.entrada ? (
            <h1>Entradas</h1>
          ) : (
            <TablesStock />
          )}
        </C.DivSectionS>
      </C.Section>
    </Main>
  );
}
