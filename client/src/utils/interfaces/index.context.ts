export interface ICreateContext {
  suppleis: ISupplyContext[];
  SetSuppleis: (suppleis: ISupplyContext[]) => void;
}

export interface ISupplyContext {
  id: string;
  id_user: string;
  nome: string;
  quant_estoque: number;
  unidade: string;
  ativo: boolean;
  entrySupply?: IControlSupply[];
  exitSupply?: IControlSupply[];
}

export interface IControlSupply {
  id: string;
  id_supply: string;
  id_user: string;
  data: string;
  quant: number;
}
