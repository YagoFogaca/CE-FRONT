import { Chart } from '../../components/chart/index.chart';
import { DivInfos } from '../../components/div-infos-homepage/index.divInfosHomepage';
import { Header } from '../../components/header/index.header';
import { SectionInfos } from '../../components/section-infos-homepage/index.SectionHomepage';
import * as C from './style.homege';

export function Homepage() {
  const categories = [
    'Disco de Corte 4"',
    'Disco de Desbaste 4"',
    'Grafite',
    'ABRAÇADEIRA DE NYLON',
    'ABRAÇADEIRA METÁLICA 1"',
    'ABRAÇADEIRA METÁLICA 1/2"',
    'ANTIRESPINGO',
    'ARAME MIG',
    'LENTE 10',
    'LENTE 12',
    'LENTE 14',
    'LENTE TRANSPARENTE',
    'CONDUITE 3M',
    'CONDUITE 4M',
    'BICO DE CORTE 10',
    'BICO DE CORTE 8',
    'PORTA BICO M8',
    'PORTA BICO M10',
  ];

  const data = [
    30, 40, 45, 50, 49, 60, 2, 19, 30, 40, 45, 50, 49, 60, 2, 49, 60, 62,
  ];

  return (
    <>
      <Header />
      <C.SectionHomepageS>
        <DivInfos />
        <SectionInfos />
        {/* <Chart
          id={'entradas-insumo'}
          colors={['#177958']}
          categories={categories}
          text={'Entradas de insumos'}
          name={'Qtde de Entrada'}
          data={data}
        /> */}
      </C.SectionHomepageS>
    </>
  );
}
