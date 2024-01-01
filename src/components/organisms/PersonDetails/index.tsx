import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import DataCell from '../../molecules/DataCell'
import SectionHeader from '../../molecules/SectionHeader'


const PersonDetails = () => {
  const { classes } = useStyles()

  return (
    <main className={classes.root}>
      <Box maxWidth={890} margin='0 auto'>
      <section>
        <SectionHeader title='General Information' />
        <DataCell property='Eye Color' value='Blue' />
        <DataCell property='Eye Color' value='Blue' />
        <DataCell property='Eye Color' value='Blue' />
        <DataCell property='Eye Color' value='Blue' />
      </section>
      <section>
        <SectionHeader title='Vehicles' />
        <DataCell property='Snowspeeder'/>
        <DataCell property='Imperial Speeder Bike' />
      </section>
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