import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useSwapiData, BASE_URL } from './api';
import { mockSwapiPeopleData } from './__mocks__/mockData';

describe('useSwapiData', () => {
  it('fetches SWAPI data correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSwapiData(`${BASE_URL}/people/`));

    await waitForNextUpdate({ timeout: 10000 });

    expect(result.current.data).toEqual(mockSwapiPeopleData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeUndefined();
  });
});