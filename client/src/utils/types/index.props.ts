import { ReactNode } from 'react';
import { ISupply } from '../interfaces/index.supply';

export type PropsLineTable = {
  display?: boolean;
};

export type PropsFiltering = {
  filter: string;
  data: ISupply[] | [];
};

export type PropsSectionFilter = {
  setFilter: (filter: string) => void;
};

export type PropsModal = {
  modalIsOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
};
