import { PEOPLE_PAGE_SIZE, useGetPeopleSWR } from '../services/api';
import { SwapiPeopleData } from '../types';

export const useGetPeople = () => {
  const { data, error, size, setSize, isLoading } = useGetPeopleSWR()

  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');

  const isReachingEnd = data && (data as SwapiPeopleData[])[data.length - 1]?.results.length < PEOPLE_PAGE_SIZE

  const allData = data ? (data as SwapiPeopleData[]).flatMap((page) => page.results) : [];

  return {
    data: { results: allData, hasNextPage: !isReachingEnd },
    isLoading,
    isLoadingMore,
    isError: error,
    size,
    loadMore: () => {
      setSize(size + 1)
    },
  };
};