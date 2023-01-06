import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/theme';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material';
import { Listas } from './Listas';


const drawerWidth = 240;
export const NavBar = () => {


  return (
    <ThemeProvider theme={theme}>
      <AppBar 
        position="fixed" 
        color="primary" 
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton color='inherit' aria-label='menu' sx={{mr:1}}>
            <MenuIcon/>
          </IconButton>

          <Typography variant="h6">
            nope
          </Typography>

        </Toolbar>
      </AppBar>
      <Listas/>

    </ThemeProvider>
  )
}


