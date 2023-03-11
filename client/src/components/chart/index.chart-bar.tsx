import ReactApexChart from 'react-apexcharts';
import { PropsChartBar } from '../../utils/types/index.props';

export function ChartBar({ data, seriesName, titleText }: PropsChartBar) {
  return (
    <ReactApexChart
      options={{
        chart: {
          height: 500,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          enabled: true,

          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#583630'],
          },
        },
        xaxis: {
          categories: [
            data[0].month,
            data[2].month,
            data[3].month,
            data[4].month,
            data[5].month,
            data[6].month,
            data[7].month,
            data[8].month,
            data[9].month,
            data[10].month,
            data[11].month,
          ],
          position: 'button',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#0073ff',
                colorTo: '#000000',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        title: {
          text: titleText,
          floating: true,
          offsetY: 0,
          align: 'center',
          style: {
            color: '#313131',
          },
        },
      }}
      series={[
        {
          name: seriesName,
          data: [
            data[0].amount,
            data[2].amount,
            data[3].amount,
            data[4].amount,
            data[5].amount,
            data[6].amount,
            data[7].amount,
            data[8].amount,
            data[9].amount,
            data[10].amount,
            data[11].amount,
          ],
        },
      ]}
      type="bar"
      width={600}
      height={400}
    />
  );
}
