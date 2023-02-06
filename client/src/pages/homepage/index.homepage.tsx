import { useEffect, useState } from 'react';
import { Main } from '../../components-styled/main/index.main';
import { Header } from '../../components/header/index.header';
import { api } from '../../utils/api/api';
import { ISuppliesEntrys } from '../../utils/interfaces/useState.interface';
import * as C from './style.homege';

export function Homepage() {
  const [supply, setSupply] = useState<ISuppliesEntrys[]>([]);

  const findSupply = async () => {
    const suppleis = await api.findAllSpply();
    setSupply(suppleis);
    console.log(suppleis);
  };

  useEffect(() => {
    findSupply();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <C.SectionHomepageS>
          <div className="card-infos"></div>
          <div className="grafico-pizza">
            <div></div>
            <div></div>
          </div>
          <div className="grafico-mes"></div>
          <div className="grafico-mes"></div>
        </C.SectionHomepageS>
      </Main>
    </>
  );
}
