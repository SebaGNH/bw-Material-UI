import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/theme';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material';

export const NavBar = () => {


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton color='inherit' aria-label='menu0' sx={{mr:1}}>
            <MenuIcon/>
          </IconButton>

          <Typography variant="h6">
            nope
          </Typography>

        </Toolbar>
      </AppBar>

    </ThemeProvider>
  )
}
