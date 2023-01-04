import React from 'react'
import {Stack, Button, IconButton } from '@mui/material';
import { AccessAlarm as AccessAlarmIcon, Delete as DeleteIcon} from '@mui/icons-material';

export const Botones = () => {
  return (
    <Stack spacing={3} direction="row">
        <Button variant="contained" color="secondary">
          Boton nuevo
        </Button>
        <Button 
          color="secondary"
          variant="contained" 
        ><AccessAlarmIcon 
          color='info' 
          //fontSize='large'  
          sx={{ fontSize: 40 }}
          /> Segundo Botón
        </Button>

        <Button 
          variant="outlined" 
          startIcon={<DeleteIcon />}
          color="inherit"
          >
          Delete
        </Button>
      </Stack>
  )
}
