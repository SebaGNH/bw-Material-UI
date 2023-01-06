import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import {BuildCircle as BuildCircleIcon, BorderOuter as BorderOuterIcon, BatchPrediction as BatchPredictionIcon, AssignmentInd as AssignmentIndIcon} from '@mui/icons-material';



export const Listas = () => {
  return (
    <>
      <List component="nav">
        <ListItemButton>
          <ListItemIcon>
            <BuildCircleIcon/>
          </ListItemIcon>
          <ListItemText primary="Inicio"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BuildCircleIcon/>
          </ListItemIcon>
          <ListItemText primary="Fin"/>
        </ListItemButton>
        <Divider/>
      </List>



      <Divider/>
    </>
  )
}

