import { BASE_URL, useSwapiData } from '../services/api';
import { SwapiSpecieData } from '../types';

export const useGetSpecie = (specieUrl?: string) => useSwapiData<SwapiSpecieData>(specieUrl ?? `${BASE_URL}/species/1/`)