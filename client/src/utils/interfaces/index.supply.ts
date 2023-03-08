export interface ISupply {
  id: string;
  nome: string;
  quant_estoque: number;
  unidade: string;
  ativo: boolean;
}

export interface ICreateSupply {
  nome: string;
  quant_estoque: number;
  unidade: string;
  ativo: boolean;
  id_user: string | null;
}

export interface IUpdateSupply {
  nome?: string;
  quant_estoque?: number;
  unidade?: string;
  ativo?: boolean;
}
