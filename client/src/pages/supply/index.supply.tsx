import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/index.header';
import * as C from './style.supply';

export function SupplyPage() {
  const { id } = useParams();

  const supply = {
    ativo: true,
    id: 'b233f7af-1681-42e1-9e8b-bc90532792a6',
    id_user: 'b644b063-72cf-4a35-ad51-431f498cf54d',
    nome: 'ESCOVA DE AÇO MANUAL',
    quant_estoque: 78,
    unidade: 'pç',
  };

  return (
    <>
      <Header />
      <C.SectionSupplyPage>
        <C.AsideSupplyPage>
          <div className="div-infos-1">
            <p>ID: b233f7af-1681-42e1-9e8b-bc90532792a6</p>
            <p>Nome: ESCOVA DE AÇO MANUAL</p>
          </div>
          <div className="div-infos-2">
            <p>Quantidade em estoque: 185</p>
            <p>Unidade: pç</p>
            <p>Ativo: Ativo</p>
          </div>
        </C.AsideSupplyPage>
      </C.SectionSupplyPage>
    </>
  );
}
