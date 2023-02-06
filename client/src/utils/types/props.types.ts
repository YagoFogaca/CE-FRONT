import { ReactNode } from 'react';
import { ISupplies } from '../interfaces/useState.interface';

export type PropsTable = {
  widthP?: boolean;
  bg?: boolean;
  displayP?: boolean;
};

export type PDivBtn = {
  setView: (value: {
    estoque: boolean;
    saida: boolean;
    entrada: boolean;
  }) => void;

  view: { estoque: boolean; saida: boolean; entrada: boolean };
};

export type PropsBtn = {
  borderP?: boolean;
};

export type PropsSectionTable = {
  setFilter: (value: string) => void;
};

export type PropsFormSectionTable = {
  setFilter: (value: string) => void;
  openModal: () => void;
};

export type PropsReactModalC = {
  modalIsOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
};

export type PropsChart = {
  id: string;
  colors: string[];
  categories: string[];
  text: string;
  name: string;
  data: number[];
};

export type FormSectionInfosFilter = {
  nome: string;
  quant: number;
};

export type PropsFormSectionInfosC = {
  setFilter: (value: FormSectionInfosFilter) => void;
  suppleis: ISupplies[];
};

export type PropsDivInfos = {
  supplies: ISupplies[];
};
