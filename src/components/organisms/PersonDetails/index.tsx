import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import { Person } from '../../../types';
import DataCell from '../../molecules/DataCell'
import SectionHeader from '../../molecules/SectionHeader'
import VehicleCell from './VehicleCell';

interface IPersonDetails {
  selectedPerson?: Person;
}

const PersonDetails = ({ selectedPerson }: IPersonDetails) => {
  const { classes } = useStyles()

  if(!selectedPerson) return

  return (
    <main className={classes.root}>
      <Box maxWidth={890} margin='0 auto'>
        <section>
          <SectionHeader title='General Information' />
          <DataCell property='Eye Color' value={selectedPerson.eye_color} />
          <DataCell property='Hair Color' value={selectedPerson.hair_color} />
          <DataCell property='Skin Color' value={selectedPerson.skin_color} />
          <DataCell property='Birth Year' value={selectedPerson.birth_year} />
        </section>
        { Boolean(selectedPerson.vehicles.length) && (
          <section>
          <SectionHeader title='Vehicles' />
          {
            selectedPerson.vehicles.map(vehicle => (
              <VehicleCell key={`${vehicle}-${selectedPerson.url}`} vehicleUrl={vehicle} />
            ))
          }
        </section>
        )}
      </Box>
    </main>
  )
}

const useStyles = makeStyles({ 'name': 'PersonDetails'})(
  () => ({
    root: {
      flex: '1 1 auto',
    },
  })
);

export default PersonDetails