import { ISupply } from './index.supply';

export interface IEntry {
  id: string;
  id_supply: string;
  id_user: string;
  quant: string;
  data: string;
  supply: ISupply;
}
