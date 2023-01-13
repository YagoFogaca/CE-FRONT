export type PorpsUlS = {
  percentage?: number;
};

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
