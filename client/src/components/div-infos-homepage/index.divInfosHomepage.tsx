import * as C from './style.divInfosHomepage';

export function DivInfos() {
  return (
    <C.SectionDivInfosS>
      <C.DivInfoss>
        <h5>Total estoque Ativo</h5>
        <span id="ativo">35</span>
      </C.DivInfoss>
      <C.DivInfoss>
        <h5>Total estoque Obsoleto</h5>
        <span id="obsoleto">10</span>
      </C.DivInfoss>
      <C.DivInfoss>
        <h5>Total Estoque</h5>
        <span id="total">45</span>
      </C.DivInfoss>
    </C.SectionDivInfosS>
  );
}
