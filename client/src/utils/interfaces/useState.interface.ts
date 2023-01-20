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
