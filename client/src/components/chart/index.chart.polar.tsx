import ReactApexChart from 'react-apexcharts';
import { PropsChartPolar, QuantControl } from '../../utils/types/index.props';
export function ChartPolar({ data }: PropsChartPolar) {
  const labels: string[] = [];
  const series: number[] = [];

  data.map(item => {
    labels.push(item.name);
    series.push(Math.ceil(item.quantControl ?? 0));
  });

  return (
    <ReactApexChart
      options={{
        labels: labels,
        stroke: {
          colors: ['#fff'],
        },
        fill: {
          opacity: 0.8,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 500,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      }}
      series={series}
      type="polarArea"
      width={450}
    />
    // <h1>Teste</h1>
  );
}
