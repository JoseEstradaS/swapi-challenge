import { Fragment } from 'react';
import { Divider, ListItemButton, ListItemText } from '@mui/material'
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';

interface PersonCell {
  name: string;
  specie?: string;
  homeworld?: string;
}

const PersonCell = ({name, specie, homeworld }: PersonCell) => {
  const { classes } = useStyles()

  const handleClick = () => {
    
  }

  return (
    <Fragment key={`${name}-${specie}-${homeworld}`} >
      <ListItemButton className={classes.root} onClick={handleClick}>
        <ListItemText
          primary={name}
          primaryTypographyProps={{ color: 'primary', variant: 'h2'}}
          secondary={specie && homeworld ? `${specie} from ${homeworld}` : 'Loading...'}
          secondaryTypographyProps={{ color: 'primary.light', variant: 'body1' }} />
        <NavigateNextIcon />
      </ListItemButton>
      <Divider />
    </Fragment>
  )
}

const useStyles = makeStyles({ 'name': 'PersonCell'})(
  (theme) => ({
    root: {
      padding: theme.spacing(2)
    },
  })
);

export default PersonCell