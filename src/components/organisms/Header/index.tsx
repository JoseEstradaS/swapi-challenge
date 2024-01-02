import { makeStyles } from 'tss-react/mui';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Person } from '../../../types';

interface IHeader {
  selectedPerson?: Person;
  onBack: () => void;
}

const Header = ({onBack, selectedPerson}: IHeader) => {
  const { classes } = useStyles()

  return (
    <AppBar position="sticky">
      <Toolbar>
        { selectedPerson && (
          <IconButton aria-label='Go back' color='inherit' onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography className={classes.title} variant="h6" component="div">
          { selectedPerson?.name ? selectedPerson.name : 'People of Star Wars'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles({ 'name': 'Header'})(
  (theme) => ({
    title: {
      [theme.breakpoints.down('md')]: {
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  })
);

export default Header