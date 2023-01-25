import { Chart } from '../../components/chart/index.chart';
import { DivInfos } from '../../components/div-infos-homepage/index.divInfosHomepage';
import { Header } from '../../components/header/index.header';
import { SectionInfos } from '../../components/section-infos-homepage/index.SectionHomepage';
import * as C from './style.homege';

export function Homepage() {
  return (
    <>
      <Header />
      <C.SectionHomepageS>
        <DivInfos />
        <SectionInfos />
      </C.SectionHomepageS>
    </>
  );
}
