import { useSwapiData } from '../services/api'
import { SwapiPlanetData } from '../types'

export const useGetPlanet = (planetUrl: string) => useSwapiData<SwapiPlanetData>(planetUrl)