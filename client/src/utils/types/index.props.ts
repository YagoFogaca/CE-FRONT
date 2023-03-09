import { ReactNode } from 'react';

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
