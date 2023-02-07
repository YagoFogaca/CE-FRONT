import { createContext, useState } from 'react';
import { ISupplyContext } from '../utils/interfaces/supplyContext';

export const supplyContext = createContext<ISupplyContext[]>([]);

export const SupplyContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [supply, SetSupply] = useState<ISupplyContext[]>([]);
  return (
    <supplyContext.Provider value={supply}>{children}</supplyContext.Provider>
  );
};
