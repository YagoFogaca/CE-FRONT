import { createContext, useState } from 'react';
import {
  ICreateContext,
  ISupplyContext,
} from '../utils/interfaces/supplyContext';

export const supplyContext = createContext<ICreateContext>({
  suppleis: [],
  SetSuppleis: () => {},
});

export const SupplyContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [suppleis, SetSuppleis] = useState<ISupplyContext[]>([]);
  return (
    <supplyContext.Provider value={{ suppleis, SetSuppleis }}>
      {children}
    </supplyContext.Provider>
  );
};
