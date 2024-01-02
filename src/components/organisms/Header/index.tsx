import { AppBar, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Person } from '../../../types';
import { IconButton } from '@mui/material';

interface IHeader {
  selectedPerson?: Person;
  onBack: () => void;
}

const Header = ({onBack, selectedPerson}: IHeader) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        { selectedPerson && (
          <IconButton color='inherit' onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div">
          { selectedPerson?.name ? selectedPerson.name : 'Ravn Star Wars Registry'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header