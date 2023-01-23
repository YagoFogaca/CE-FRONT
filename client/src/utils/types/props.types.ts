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

export type PropsReactModalC = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

export type PropsChart = {
  id: string;
  colors: string[];
  categories: string[];
  text: string;
  name: string;
  data: number[];
};
