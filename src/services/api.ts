import useSWR from 'swr'
import { SwapiPeopleData } from './types';

const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const res = await fetch(...args);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json() as Promise<T>;
};

export const useGetPeople = (page: number = 1) => {
  const { data, error, isLoading } = useSWR(`https://swapi.dev/api/people/?page=${page}`, fetcher)

  return {
    data: data as SwapiPeopleData,
    isLoading,
    isError: error
  }
}