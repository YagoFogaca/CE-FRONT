export type PorpsUlS = {
  percentage?: number;
};

export type PropsTable = {
  widthP?: boolean;
  bg?: boolean;
  display?: boolean;
};

export type PDivBtn = {
  setView: (value: {
    estoque: boolean;
    saida: boolean;
    entrada: boolean;
  }) => void;
};
