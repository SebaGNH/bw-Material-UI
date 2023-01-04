import React from 'react'
import { red, lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    info: {
      light: '#ff7961',
      main: lightBlue[500],
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
/* Propiedades para cambiar */
/* https://mui.com/material-ui/customization/default-theme/ */


/* Colores */
/* https://mui.com/material-ui/customization/color/ */