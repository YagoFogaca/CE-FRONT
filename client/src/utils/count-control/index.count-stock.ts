import { PropsCountStock } from '../types/index.props';

export function countStock({ setQuantStock, suppleis }: PropsCountStock) {
  const quantStock = {
    total: 0,
    active: 0,
    obsolete: 0,
  };

  suppleis.map(supply => {
    quantStock.total += supply.quant_estoque;
    if (supply.ativo) {
      quantStock.active += supply.quant_estoque;
    } else {
      quantStock.obsolete += supply.quant_estoque;
    }
  });

  setQuantStock(quantStock);
}
