import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
    CssBaseline,
    Stack,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Input,
    InputLabel,
    Modal,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
    CheckBox,
    Grid,
    Typography,
    Button,
    Box,
    createTheme
  } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees, updateEmployees } from '../Redux/Action';
  const theme = createTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  let initialdata = {
      name: "",
      email: "",
      phone: "",
      gender: "",
      hobbies:"",
      dob:""
    };
const Cards = ({card}) => {
    const [EmpData, setEmpData] = React.useState(card);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const dispatch = useDispatch();
    const Emp = useSelector((store) => store.employees);
    const handlechange = (e) => {
      const { name, value } = e.target;
      setEmpData({ ...EmpData, [name]: value });
    };
    const handleEdit = (e) => {
        // console.log(card.id)
        e.preventDefault();
        dispatch(updateEmployees(card.id,EmpData)).then(
          setEmpData({ ...initialdata }),
          getEmployees(),
          alert("Employee Updated"),
          window.location.reload()
        );
      };
  return (
    <Box width={'300em'}>
        <Grid item key={card.id} xs={12}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                  height={'100em'}
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>Email: {card.email}</Typography>
                    <Typography>Date of Birth: {card.dob}</Typography>
                    <Typography>Phone: {card.phone}</Typography>
                    <Typography>Gender: {card.gender}</Typography>
                    <Typography>Hobbies: {card.hobbies}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>

                    <Button onClick={handleOpen2} size="small">
                      Edit
                    </Button>
                    <Modal
                      open={open2}
                      onClose={handleClose2}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                      <form onSubmit={handleEdit}>
                       
                  <FormControl>
                    <Typography>{card.id}</Typography>
                    <Typography>Name</Typography>
                    <TextField required name="name"
            value={EmpData.name}
            onChange={handlechange}/>
                    <Typography>Email</Typography>
                    <TextField required type={"email"} name="email"
            value={EmpData.email}
            onChange={handlechange}/>
                    <Typography>Phone</Typography>
                    <TextField required type={"number"} name="phone"
            value={EmpData.phone}
            onChange={handlechange}/>
                    <Typography>Date of Birth</Typography>
                    <OutlinedInput
                      required
                      id="dob"
                      type="date"
                      variant="outline"
                      name="dob"
            value={EmpData.dob}
            onChange={handlechange}
                      />
                    {/* <input type={'date'}></input> */}
                    <Typography>Gender</Typography>
                    <RadioGroup
                    name="gender"
                    value={EmpData.gender}
                    onChange={handlechange}
                      required
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                    //   name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                        />
                    </RadioGroup>
                    <Typography>Hobbies</Typography>
                    <FormGroup>
                      <FormControlLabel
                      value={'Playing Cricket'}
                        control={<Checkbox />}
                        label="Playing Cricket"
                        />
                      <FormControlLabel
                      value={'Watching Movies'}
                        control={<Checkbox />}
                        label="Watching Movies"
                        />
                      <FormControlLabel
                       value={'Singing'}
                        control={<Checkbox />}
                        label="Singing"
                        />
                      <FormControlLabel
                      value={'Cooking'}
                        control={<Checkbox />}
                        label="Cooking"
                        />
                    </FormGroup>

                    <Button type="submit" variant="contained">
                      {" "}
                      Edit Employee Details
                    </Button>
                  </FormControl>
                        </form>
                      </Box>
                    </Modal>
                  </CardActions>
                </Card>
              </Grid>
    </Box>
  )
}

export default Cards