import * as C from './style.controle';
import { Main } from '../../components-styled/main/index.main';
import { useState } from 'react';
import { DivBtn } from '../../components/div-btn/index.divBtn';
import { Table } from '../../components/table/index.table';

export function ControlePage() {
  const [view, setView] = useState({
    estoque: true,
    saida: false,
    entrada: false,
  });

  return (
    <Main>
      <DivBtn setView={setView} />
      <C.Section>
        <C.DivSectionS>
          {view.saida ? (
            <h1>Saida</h1>
          ) : view.entrada ? (
            <h1>Entradas</h1>
          ) : (
            <Table />
          )}
        </C.DivSectionS>
      </C.Section>
    </Main>
  );
}
