import ApexChart from 'react-apexcharts';
import { PropsChart } from '../../utils/types/props.types';
import { SectionGraficos } from './style.chart';

export function Chart({
  id,
  colors,
  categories,
  data,
  name,
  text,
}: PropsChart) {
  const configChart = {
    options: {
      chart: {
        id: id,
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          horizontal: true,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: true,
        offsetX: 3,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      xaxis: {
        categories: categories,
      },
      title: {
        text: text,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
    },
    series: [
      {
        name: name,
        data: data,
      },
    ],
  };

  return (
    <>
      <SectionGraficos>
        <div className="row">
          <div className="mixed-chart">
            <ApexChart
              className="chart-entry"
              series={configChart.series}
              options={configChart.options}
              width="90%"
              height="550px"
              type="bar"
            />
          </div>
        </div>
      </SectionGraficos>
    </>
  );
}
