import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import { theme } from './Theme/theme';


export const TemaPersonalizado = () => {
  return (
    <ThemeProvider theme={theme}>
    
      <Button variant="text" color="info">
        Boton Tema
      </Button>
    
    </ThemeProvider>
  )
}
