import { useState } from 'react';
import * as C from './style.SectionHomepage';
import * as T from '../../components-styled/table-styled/index.table';
import { FormSectionInfos } from '../forms/index.SectionsInfos';
import { Chart } from '../chart/index.chart';
import { FormSectionInfosFilter } from '../../utils/types/props.types';
import {
  ISuppliesEntrys,
  PropsSuppliesEntrys,
} from '../../utils/interfaces/useState.interface';

export function SectionInfos({ supplies }: PropsSuppliesEntrys) {
  const [filter, setFilter] = useState<FormSectionInfosFilter>({
    nome: '',
    quant: 0,
  });

  const CheckFilter = (supply: ISuppliesEntrys) => {
    return (
      supply.nome.toLowerCase().includes(filter.nome.toLowerCase()) &&
      supply.quant_estoque > 0
    );
  };
  const suppliesFilter = supplies.filter(CheckFilter);

  return (
    <C.SectionInfos>
      <FormSectionInfos suppleis={supplies} setFilter={setFilter} />
      {filter.nome ? (
        <>
          <C.SectionInfosDiv>
            <T.TableS>
              <T.TrS>
                <T.ThS>Nome</T.ThS>
                <T.ThS>Qtde</T.ThS>
                <T.ThS>Data</T.ThS>
              </T.TrS>
              {suppliesFilter.map((insumo, index) => {
                return (
                  <T.TrS bg={index % 2 === 0 ? true : false} key={index}>
                    <T.TdS>{insumo.nome}</T.TdS>
                    <T.TdS>{insumo.quant_estoque}</T.TdS>
                    <T.TdS>
                      {insumo.entrySupply[index].data.split('T')[0]}
                    </T.TdS>
                  </T.TrS>
                );
              })}
            </T.TableS>
          </C.SectionInfosDiv>
          {/* <Chart
            id={'entradas-insumo'}
            colors={['#177958']}
            categories={categories}
            text={'Entradas de insumos'}
            name={'Qtde de Entrada'}
            data={data}
          /> */}
        </>
      ) : (
        <></>
      )}
    </C.SectionInfos>
  );
}
