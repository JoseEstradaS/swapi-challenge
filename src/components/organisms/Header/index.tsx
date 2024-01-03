import { makeStyles } from 'tss-react/mui';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Person } from '../../../types';

interface IHeader {
  selectedPerson?: Person;
  isMobile: boolean;
  onBack: () => void;
}

const Header = ({onBack, selectedPerson, isMobile}: IHeader) => {
  const { classes } = useStyles()

  const defaultTitle = isMobile ? 'People of Star Wars' : 'Ravn Star Wars Registry'

  return (
    <AppBar position="sticky">
      <Toolbar>
        { selectedPerson && isMobile && (
          <IconButton aria-label='Go back' color='inherit' onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography className={classes.title} variant="h6" component="div">
          { selectedPerson?.name && isMobile ? selectedPerson.name : defaultTitle}
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