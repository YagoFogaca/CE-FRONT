import { useEffect, useState, useContext } from 'react';
import { supplyContext } from '../../context/supply.context';
import { Api } from '../../utils/api/api';
import { ISupplyContext } from '../../utils/interfaces/index.context';
import './index.style.home.css';

export function HomePage() {
  const contextSupply = useContext(supplyContext);
  const [supply, setSupply] = useState<ISupplyContext[]>([]);

  const findSupplies = async () => {
    try {
      const suppleis = await Api.findALLSupplies();
      contextSupply.SetSuppleis(suppleis);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findSupplies();
  }, []);
  return <h1>Essa é a home</h1>;
}
