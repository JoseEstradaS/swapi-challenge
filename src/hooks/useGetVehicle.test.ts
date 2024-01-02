import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useGetVehicle } from '../hooks/useGetVehicle';
import { mockedVehicleData } from './__mocks__/mockData';

describe('useGetVehicle', () => {
  it('fetches vehicle data correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetVehicle('https://swapi.dev/api/vehicles/38/'));

    await waitForNextUpdate({ timeout: 5000 });

    expect(result.current.data).toEqual(mockedVehicleData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeUndefined();
  });
});
