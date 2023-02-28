import { PropsFiltering } from '../types/index.props';

export function Filtering({ data, filter }: PropsFiltering) {
  const filterData =
    filter.length > 0
      ? data.filter(item => {
          return item.nome.toLowerCase().includes(filter.toLowerCase());
        })
      : data;

  return filterData;
}
