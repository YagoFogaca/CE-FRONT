import { ReactNode } from 'react';
import { ISupply } from '../interfaces/index.supply';

export type PropsLineTable = {
  display?: boolean;
};

export type PropsFiltering = {
  filter: string;
  data: ISupply[] | [];
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

export type PropsFormCreateSupply = {
  closeModal: () => void;
};
