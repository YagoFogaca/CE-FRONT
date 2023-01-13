import { PDivBtn } from '../../utils/types/props.types';
import * as C from './styled.divBtn';

export function DivBtn({ setView, view }: PDivBtn) {
  return (
    <C.DivBtn>
      <C.Btn
        borderP={view.estoque ? true : false}
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
        borderP={view.saida ? true : false}
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
        borderP={view.entrada ? true : false}
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
