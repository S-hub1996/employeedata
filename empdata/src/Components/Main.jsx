import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, Modal, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../Redux/Action';
// import { Image } from '@mui/material/Image';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function Main() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const Emp = useSelector((store) => store.employees);
   
    React.useEffect(() => {
        if ( Emp.length === 0) {
    
          dispatch(getEmployees())
        }
      }, []);
      console.log(Emp)
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          <img src='https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px-200x49.png' alt='...'  />
         
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Employee's Details
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            An employee is a term for workers and managers working for a company, organization or community. These people are the staff of the organization. In general, any person hired by an employer to do a particular job in exchange for payment is an employee.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={handleOpen} variant="contained">Add New Employee</Button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl>

  <Typography>Name</Typography>
  <TextField required/>
  <Typography>Email</Typography>
  <TextField />
  <Typography>Phone</Typography>
  <TextField type={'number'} />
  <Typography>Date of Birth</Typography>
  <OutlinedInput id='dob' type='date' variant='outline'/>
  {/* <input type={'date'}></input> */}
  <Typography>Gender</Typography>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
      <Typography>Hobbies</Typography>
  <CheckBox defaultChecked />
<Checkbox label="Label"/>
<Checkbox disabled label="Label"/>
<Checkbox disabled checked label="Label"/>


  <Button type='submit' variant='contained'> khali</Button>


</FormControl>
        </Box>
      </Modal>
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Emp?.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.name}
                    </Typography>
                    <Typography>
                   Email: {card.email}
                    </Typography>
                    <Typography>
                    Phone: {card.phone}
                    </Typography>
                    <Typography>
                     Gender: {card.gender}
                    </Typography>
                    <Typography>
                    Hobbies: {card.hobbies}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          tericsoft.com
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}