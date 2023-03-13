import { ISupply } from './index.supply';

export interface IControlSupply {
  id: string;
  id_supply: string;
  id_user: string;
  quant: number;
  data: string;
  supply: ISupply;
}

export interface ICreateControlSupply {
  id_supply: string;
  id_user: string | null;
  quant: number;
  data: string;
}

export interface IUpdateControlSupply {
  id_supply: string;
  quant: number;
  data: string;
}
