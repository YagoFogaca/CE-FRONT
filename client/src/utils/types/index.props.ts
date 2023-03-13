import { ReactNode } from 'react';
import { Api } from '../api/api';
import { ISupplyContext } from '../interfaces/index.context';

export type PropsLineTable = {
  display?: boolean;
};

export type PropsFiltering = {
  filter: string;
  data: any;
  functionIncludes: (arg: any) => {};
};

export type PropsBtnCreate = {
  closeModal: () => void;
  modalIsOpen: () => void;
  isOpenModal: boolean;
  children: ReactNode;
};

export type PropsModal = {
  modalIsOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
};

export type PropsModalControl = {
  modalIsOpen: boolean;
  closeModal: () => void;
  nome: string | undefined;
  quant: number | undefined;
  data: string | undefined;
  deleteControl?: Api;
  updateControl: Api;
};

export type PropsSectionFilter = {
  setFilter: (filter: string) => void;
  closeModal: () => void;
  modalIsOpen: () => void;
  isOpenModal: boolean;
  children: ReactNode;
};

// mudar para generico
export type PropsFormCreate = {
  closeModal: () => void;
};

export type LastTwelveMonths = {
  month: string;
  amount: number;
};

export type QuantControl = {
  name: string;
  quantControl?: number;
};

export type PropsChartBar = {
  titleText: string;
  seriesName: string;
  data: LastTwelveMonths[];
};

export type PropsChartPolar = {
  data: QuantControl[];
};

export type UseStateQuantStock = {
  total: number;
  active: number;
  obsolete: number;
};

export type PropsCountStock = {
  suppleis: ISupplyContext[];
  setQuantStock: (data: UseStateQuantStock) => void;
};
