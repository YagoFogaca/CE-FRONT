import { PropsFiltering } from '../types/index.props';

export function Filtering({ data, filter, functionIncludes }: PropsFiltering) {
  const filterData = filter.length > 0 ? data.filter(functionIncludes) : data;

  return filterData;
}
