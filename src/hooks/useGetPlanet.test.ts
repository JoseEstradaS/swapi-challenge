import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { mockedPlanetData } from './__mocks__/mockData';
import { useGetPlanet } from './useGetPlanet';

describe('useGetPlane', () => {
  it('fetches planet data correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetPlanet('https://swapi.dev/api/planets/1/'));

    await waitForNextUpdate({ timeout: 5000 });

    expect(result.current.data).toEqual(mockedPlanetData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeUndefined();
  });
});
