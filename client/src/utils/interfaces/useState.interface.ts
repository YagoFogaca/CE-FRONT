export interface ISupplies {
  id?: string;
  nome: string;
  quant_estoque: number;
  unidade: string;
  ativo: boolean;
}

export interface ICreateSupplies extends ISupplies {
  id_user: string | null;
}

export interface IUpdateSupplies {
  nome: string;
  quant_estoque: number;
  unidade: string;
  ativo: boolean;
}

export interface ICreateEntrySupply {
  id_supply: string;
  id_user: string | null;
  quant: number;
  data: string;
}

export interface IEntrySupply extends ICreateEntrySupply {
  id: string;
  supply: ISupplies;
}

export interface ISuppliesEntrys extends ISupplies {
  entrySupply: IEntrySupply[];
  exitSupply: [];
}

export type PropsSuppliesEntrys = {
  supplies: ISuppliesEntrys[];
};
