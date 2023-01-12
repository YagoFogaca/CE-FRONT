import * as C from './style.controle';
import { Main } from '../../components-styled/main/index.main';

export function ControlePage() {
  return (
    <Main>
      <C.DivBtn>
        <C.Btn>Estoque</C.Btn>
        <C.Btn>Saidas</C.Btn>
        <C.Btn>Entradas</C.Btn>
      </C.DivBtn>
      <C.Section></C.Section>
    </Main>
  );
}
