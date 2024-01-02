import { useSwapiData } from '../services/api';
import { SwapiVehicleData } from '../types';

export const useGetVehicle = (vehicleUrl: string) => useSwapiData<SwapiVehicleData>(vehicleUrl)