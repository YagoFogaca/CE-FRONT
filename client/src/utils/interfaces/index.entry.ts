import { ISupply } from './index.supply';

export interface IControlSupply {
  id: string;
  id_supply: string;
  id_user: string;
  quant: string;
  data: string;
  supply: ISupply;
}

export interface ICreateControlSupply {
  id_supply: string;
  id_user: string | null;
  quant: number;
  data: string;
}
