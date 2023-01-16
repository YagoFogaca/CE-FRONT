import { useEffect, useState } from 'react';
import * as C from '../../components-styled/table-styled/index.table';
import { SectionTable } from '../section-table/index.sectionTable';

export function TablesStock() {
  const [filter, setFilter] = useState<string>('');
  const moocks = [
    {
      id: '92f248a4-26a4-4e86-84a4-384528c65ee1',
      id_user: '6595fdc6-c1b1-4e17-b30b-4297cd808b23',
      nome: "DISCO DE DESBATE 4'",
      quant_estoque: 0,
      unidade: 'pç',
      ativo: true,
    },
    {
      id: '92f248a4-26a4-4e86-84a4-384528c65ee1',
      id_user: '6595fdc6-c1b1-4e17-b30b-4297cd808b23',
      nome: "DISCO DE DESBATE 7'",
      quant_estoque: 0,
      unidade: 'pç',
      ativo: true,
    },
    {
      id: '92f248a4-26a4-4e86-84a4-384528c65ee1',
      id_user: '6595fdc6-c1b1-4e17-b30b-4297cd808b23',
      nome: "DISCO DE CORTE 7'",
      quant_estoque: 0,
      unidade: 'pç',
      ativo: true,
    },
    {
      id: '92f248a4-26a4-4e86-84a4-384528c65ee1',
      id_user: '6595fdc6-c1b1-4e17-b30b-4297cd808b23',
      nome: "DISCO DE CORTE 4'",
      quant_estoque: 0,
      unidade: 'pç',
      ativo: true,
    },
  ];

  const filterInsumos =
    filter.length > 0
      ? moocks.filter(insumo => {
          return insumo.nome.toLowerCase().includes(filter.toLowerCase());
        })
      : moocks;

  return (
    <>
      <SectionTable setFilter={setFilter} />
      <C.TableS>
        <C.TrS>
          <C.ThS widthP displayP>
            Cod
          </C.ThS>
          <C.ThS>Nome</C.ThS>
          <C.ThS>Qtde Esoque</C.ThS>
          <C.ThS>Unid</C.ThS>
          <C.ThS displayP>Ativo</C.ThS>
        </C.TrS>
        {filterInsumos.map((insumo, index) => {
          return (
            <C.TrS bg={index % 2 === 0 ? true : false} key={index}>
              <C.TdS widthP displayP>
                {insumo.id}
              </C.TdS>
              <C.TdS>{insumo.nome}</C.TdS>
              <C.TdS>{insumo.quant_estoque}</C.TdS>
              <C.TdS>{insumo.unidade.toUpperCase()}</C.TdS>
              <C.TdS displayP>{insumo.ativo ? 'ATIVO' : 'OBSOLETO'}</C.TdS>
            </C.TrS>
          );
        })}
      </C.TableS>
    </>
  );
}
