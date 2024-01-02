import { useGetVehicle } from '../../../hooks/useGetVehicle';
import DataCell from '../../molecules/DataCell';

interface IVehicleCell {
  vehicleUrl: string;
}

const VehicleCell = ({ vehicleUrl }: IVehicleCell) => {
  const {
    data,
    isLoading
  } = useGetVehicle(vehicleUrl)

  return (
    <DataCell isLoading={isLoading} property={data?.name}/>
  )
}

export default VehicleCell