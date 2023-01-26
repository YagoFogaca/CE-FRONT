import { useEffect, useState } from 'react';
import { DivInfos } from '../../components/div-infos-homepage/index.divInfosHomepage';
import { Header } from '../../components/header/index.header';
import { SectionInfos } from '../../components/section-infos-homepage/index.SectionHomepage';
import { api } from '../../utils/api/api';
import { ISuppliesEntrys } from '../../utils/interfaces/useState.interface';
import * as C from './style.homege';

export function Homepage() {
  const [supply, setSupply] = useState<ISuppliesEntrys[]>([]);

  const findSupply = async () => {
    const suppleis = await api.findAllSpply();
    setSupply(suppleis);
  };

  useEffect(() => {
    findSupply();
  }, []);

  return (
    <>
      <Header />
      <C.SectionHomepageS>
        <DivInfos supplies={supply} />
        <SectionInfos supplies={supply} />
      </C.SectionHomepageS>
    </>
  );
}
