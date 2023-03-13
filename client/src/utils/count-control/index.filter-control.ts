import { IControlSupply } from '../interfaces/index.context';
import { LastTwelveMonths } from '../types/index.props';

export function filterControl(data?: IControlSupply[]) {
  const today = new Date();
  const lastTwelveMonths: LastTwelveMonths[] = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);

    const formattedDate = date.toISOString().substring(0, 7);
    lastTwelveMonths.push({
      month: formattedDate,
      amount: 0,
    });
  }

  lastTwelveMonths.reverse();

  for (let i = 0; i < lastTwelveMonths.length; i++) {
    const filterData = data?.filter(item => {
      return item.data.includes(lastTwelveMonths[i].month);
    });

    filterData?.map(item => {
      lastTwelveMonths[i].amount += item.quant;
    });
  }

  return lastTwelveMonths;
}
