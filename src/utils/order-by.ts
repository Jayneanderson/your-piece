import { OrderBy } from '../types/types';

interface Props<T> {
  data: T[];
  attribute: keyof T;
  order: OrderBy | null;
}

export const orderBy = <T>(params: Props<T>): T[] => {
  if (params?.order === 'asc') {
    return params.data.sort((a, b) =>
      String(a[params.attribute]).localeCompare(String(b[params.attribute]))
    );
  }

  if (params?.order === 'desc') {
    return params.data.sort((a, b) =>
      String(b[params.attribute]).localeCompare(String(a[params.attribute]))
    );
  }

  return params.data;
};
