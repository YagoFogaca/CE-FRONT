import { ReactNode } from 'react';

export type PropsTable = {
  widthP?: boolean;
  bg?: boolean;
  displayP?: boolean;
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
