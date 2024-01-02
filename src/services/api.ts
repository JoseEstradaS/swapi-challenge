import useSWRImmutable from 'swr/immutable';
import useSWRInfinite from 'swr/infinite';
import { SwapiPeopleData } from '../types';

export const BASE_URL = 'https://swapi.dev/api'
export const PEOPLE_PAGE_SIZE = 10

const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const res = await fetch(...args);

  if (!res.ok)
    throw new Error('Network response was not ok');

  return res.json() as Promise<T>;
};

export const useSwapiData = <T>(url: string) => {
  const { data, error, isLoading } = useSWRImmutable(url, fetcher);

  return {
    data: data as T,
    isLoading,
    isError: error,
  };
};

export const useGetPeopleSWR = () => {
  const getKey = (pageIndex: number, previousPageData: SwapiPeopleData) => {
    if(previousPageData && !previousPageData.next)
      return null

    if(pageIndex === 0) return `${BASE_URL}/people/?page=${pageIndex + 1}`

    return previousPageData.next
  };

  return useSWRInfinite(getKey, fetcher, { revalidateFirstPage: false });
};
