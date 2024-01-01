import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div">
          Ravn Star Wars Registry
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header