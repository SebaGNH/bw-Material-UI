import React from 'react'
import {Stack, Button } from '@mui/material';


const App = () => {
  return (
    <>
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="secondary">
          Boton nuevo
        </Button>
        <Button 
          color="secondary"
          variant="contained" 
          >Segundo Botón
        </Button>
      </Stack>
    </>
  )
}

export default App