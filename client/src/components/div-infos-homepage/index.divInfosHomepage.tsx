import { PropsDivInfos } from '../../utils/types/props.types';
import * as C from './style.divInfosHomepage';

export function DivInfos({ supplies }: PropsDivInfos) {
  // console.log(supplies);
  let stockActive = 0;

  let stockObsolete = 0;

  supplies.map(supply => {
    if (supply.ativo) {
      stockActive += supply.quant_estoque;
    } else {
      stockObsolete += supply.quant_estoque;
    }
  });

  let stockTotal = stockActive + stockObsolete;

  console.log({ stockActive, stockObsolete, stockTotal });

  return (
    <C.SectionDivInfosS>
      <C.DivInfoss>
        <h5>Total estoque Ativo</h5>
        <span id="ativo">{stockActive}</span>
      </C.DivInfoss>
      <C.DivInfoss>
        <h5>Total estoque Obsoleto</h5>
        <span id="obsoleto">{stockObsolete}</span>
      </C.DivInfoss>
      <C.DivInfoss>
        <h5>Total Estoque</h5>
        <span id="total">{stockTotal}</span>
      </C.DivInfoss>
    </C.SectionDivInfosS>
  );
}
