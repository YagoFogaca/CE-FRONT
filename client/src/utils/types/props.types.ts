export type PorpsUlS = {
  percentage?: number;
};

export type PropsTableW = {
  width?: string;
  display?: string;
};

export type PDivBtn = {
  setView: (value: {
    estoque: boolean;
    saida: boolean;
    entrada: boolean;
  }) => void;
};
