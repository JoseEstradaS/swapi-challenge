import { renderHook } from '@testing-library/react-hooks';
import { useGetSpecie } from '../hooks/useGetSpecie';
import { describe, expect, it } from 'vitest';
import { mockedCustomSpecieData, mockedSpecieData } from './__mocks__/mockData';

describe('useGetSpecie', () => {
  it('fetches specie data correctly with default URL', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetSpecie());

    await waitForNextUpdate({ timeout: 5000 });

    expect(result.current.data).toEqual(mockedSpecieData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeUndefined();
  });

  it('fetches specie data correctly with provided URL', async () => {
    const customSpecieUrl = 'https://swapi.dev/api/species/3/';

    const { result, waitForNextUpdate } = renderHook(() => useGetSpecie(customSpecieUrl));

    await waitForNextUpdate({ timeout: 5000 });

    expect(result.current.data).toEqual(mockedCustomSpecieData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeUndefined();
  });
});
