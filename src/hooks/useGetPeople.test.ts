import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useGetPeople } from './useGetPeople';

const PEOPLE_PAGE_SIZE = 10

describe('useGetPeople', () => {
  it('should fetch initial data successfully', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetPeople());

    await waitForNextUpdate({ timeout: 20000 });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeUndefined();
    expect(result.current.data.results.length).toEqual(PEOPLE_PAGE_SIZE);
  }, 20000);

  it('should trigger loading state when calling loadMore', async () => {
    const { result } = renderHook(() => useGetPeople());

    result.current.loadMore();

    expect(result.current.isLoadingMore).toBe(true);
  });
    

  it('should update data correctly after calling loadMore', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetPeople());

    result.current.loadMore();
    await waitForNextUpdate({ timeout: 20000 });

    expect(result.current.data.results.length).toEqual(PEOPLE_PAGE_SIZE * 3);
  }, { timeout: 20000 });
});
