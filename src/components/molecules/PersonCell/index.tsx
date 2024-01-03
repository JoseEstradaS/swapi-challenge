import { makeStyles } from 'tss-react/mui';
import { Divider, ListItemButton, ListItemText, Skeleton } from '@mui/material'
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { useGetPlanet } from '../../../hooks/useGetPlanet';
import { useGetSpecie } from '../../../hooks/useGetSpecie';
import { Person } from '../../../types';

interface PersonCell {
  person: Person;
  onSelect: (person: Person) => void;
}

const PersonCell = ({ person, onSelect }: PersonCell) => {
  const { classes } = useStyles()

  const {
    data: specieData
  } = useGetSpecie(person.species[0])

  const {
    data: homeworldData
  } = useGetPlanet(person.homeworld)

  const handleClick = () => {
    onSelect(person)
  }

  return (
    <>
      <ListItemButton className={classes.root} onClick={handleClick}>
        <ListItemText
          primary={person.name}
          primaryTypographyProps={{ color: 'primary', variant: 'h2'}}
          secondary={(specieData && homeworldData) ? `${specieData.name} from ${homeworldData.name}` : <Skeleton width={130} /> }
          secondaryTypographyProps={{ color: 'primary.light', variant: 'body1' }} />
        <NavigateNextIcon htmlColor='black'/>
      </ListItemButton>
      <Divider className={classes.customDivider}/>
    </>
  )
}

const useStyles = makeStyles({ 'name': 'PersonCell'})(
  (theme) => ({
    root: {
      padding: theme.spacing(2)
    },
    customDivider: {
      marginLeft: theme.spacing(2)
    }
  })
);

export default PersonCell