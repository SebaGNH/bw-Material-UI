# Material UI


muibutton + tab

core es para el cdn



<!-- Variant  =  text | contained | outlined-->
<Button variant="text">Text</Button> 


 
<Button variant="contained" disableElevation>
  Disable elevation
</Button>

<!-- Outlined button -->
<Button variant="outlined" disabled>Primary</Button>


<!-- Color  =   Primary | Secondary | Error | Warning | Info | Success   -->
<Button color="secondary">Secondary</Button>
<Button variant="outlined" color="error">
  Error
</Button>

<!-- Sizes = small | medium | large  -->
<Button size="small">Small</Button>

<!--  Buttons with icons and label  -->

import DeleteIcon from '@mui/icons-material/Delete';

<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>


<!-- Icon button -->

<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>

<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>



<!-- API = https://mui.com/material-ui/api/typography/ -->

<!-- Typography =  variant="" h1 | h2 | h3 | h4 | h5 | h6 -->
<!-- subtitle1 | subtitle2 | body1 | body2 | button | caption | overline-->
<!-- body1 = parrafo -->
<Typography variant="h1">
  h1. Heading
</Typography>


<!-- align="" center | right | justify -->
<Typography align="center" variant="h6">
  variant
</Typography>

<!-- gutterBottom es un margen -->




<!-- Propiedades para cambiar -->
<!-- https://mui.com/material-ui/customization/default-theme/ -->


<!-- Colores -->
<!-- https://mui.com/material-ui/customization/color/ -->



<!-- Drawer -->





















