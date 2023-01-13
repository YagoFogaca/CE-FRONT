import { PDivBtn } from '../../utils/types/props.types';
import * as C from './styled.divBtn';

export function DivBtn({ setView }: PDivBtn) {
  return (
    <C.DivBtn>
      <C.Btn
        onClick={() => {
          setView({
            estoque: true,
            saida: false,
            entrada: false,
          });
        }}
      >
        Estoque
      </C.Btn>
      <C.Btn
        onClick={() => {
          setView({
            estoque: false,
            saida: true,
            entrada: false,
          });
        }}
      >
        Saidas
      </C.Btn>
      <C.Btn
        onClick={() => {
          setView({
            estoque: false,
            saida: false,
            entrada: true,
          });
        }}
      >
        Entradas
      </C.Btn>
    </C.DivBtn>
  );
}
