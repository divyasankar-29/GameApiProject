import React from "react";
import {FormControl,TextField,Button,Grid, InputLabel, Select, MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
// import Login from "./Login";
import { gapi } from "gapi-script";

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          gender: "",
          mobileNumber: 0,
          emailid: "",
          password: "",
          invalid:{
            firstname: "",
            lastname: "",
            mobileNumber:"",
            emailid:"",
            password: "",
          },
          toggle:false
        };

      }
    
      handleChange = (event) => {
        event.preventDefault();

        const {name,value} = event.target;
        let invalid = {...this.state.invalid}

      if(value){
       switch(name){
          case "firstname":
            invalid.firstname = value.length>3&& value.length<20&& (/^[a-zA-Z]+$/.test(value))? "":"Firstname should be alphabetic & 3-20 characters long "

          break;

          case "lastname":
            invalid.lastname = value.length>3&& value.length<20 &&(/^[a-zA-Z]+$/.test(value))? "":"Lastname should be alphabetic & 3-20 characters long"

          break;

          case "emailid":
            invalid.emailid = value.length>3 &&(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value))? "":"Invalid email-id"

          break;
            
          case "mobileNumber":
            invalid.mobileNumber = value.length===10 &&(/^[0-9]+$/.test(value))? "":"Enter a 10 digit number"

          break;

          case "password":
            invalid.password = value.length>=6 ? "":"Password should be 6 characters long"

          break;

          default : break;
        }
      }
        this.setState({
          [name] : value,
          invalid
        });

        if(this.state.firstname && this.state.lastname && this.state.gender
          && this.state.mobileNumber && this.state.emailid && this.state.password){
          this.setState({
            toggle : true
          })
        }
            
      };
  
      componentDidMount(){
        function start(){
          gapi.client.init({
            clientId:this.props.clientId,
            scope:""
          })
        };
        gapi.load('client:auth2',start);
      }

      handleClick(){
        this.props.setSignIn(true)
      };

      render(){
        
        return (
          <div>
            <Grid container sx={{marginLeft:"40%",marginBottom:"20px"}} xs={4} alignItems="center" fullWidth >
            <form autoComplete="off">
            {/* <Typography sx={{marginTop:"20px"}}>  First Name</Typography> */}
              <TextField required label="First Name"
              type="text"
              color="secondary" 
              variant="filled" 
              name="firstname" 
              value={this.state.firstname}
              onChange = {this.handleChange}
              sx={{marginTop:"20px"}}
              />
              <p style={{color:"red",fontSize:"small"}}>{this.state.invalid.firstname}</p>
          
            {/* <Typography sx={{marginTop:"30px"}}>  Last Name</Typography> */}
              <TextField required label="Last Name"
              type="text" 
              color="secondary" 
              variant="filled"
              name="lastname" 
              value={this.state.lastname}
              onChange = {this.handleChange}
              sx={{marginTop:"30px"}}/>
              <p style={{color:"red",fontSize:"small"}}>{this.state.invalid.lastname}</p>
             
            {/* <Typography sx={{marginTop:"30px"}}> Email </Typography> */}
              <TextField required label="E-mail" 
              type="email"
              color="secondary" 
              variant="filled"
              name="emailid" 
              value={this.state.emailid}
              onChange = {this.handleChange} 
              sx={{marginTop:"30px"}}/>
               <p style={{color:"red",fontSize:"small"}}>{this.state.invalid.emailid}</p>
               <br />
              
            {/* <Typography sx={{marginTop:"30px"}}> Gender </Typography>
              <RadioGroup 
              required
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              row > */}
                {/* <FormControlLabel key="male" value="male"  control={<Radio size="small"/>}  label="Male"/>
                <FormControlLabel key ="female" value="female"  control={<Radio size="small"/>}  label="Female"/> */}
              {/* </RadioGroup> */}
              <FormControl required>
                <InputLabel >Gender</InputLabel>
                <Select
                  name="gender"
                  value={this.state.gender}
                  label="Gender"
                  onChange={this.handleChange}
                  variant="filled"
                  sx={{marginTop:"10px",width:"240px"}}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>

              <br />
              
            {/* <Typography sx={{marginTop:"30px"}}> Mobile Number </Typography> */}
              <TextField required label="Mobile Number" 
              type="phone"
              color="secondary"
              variant="filled"
              name="mobileNumber" 
              value={this.state.mobileNumber}
              onChange = {this.handleChange} 
              sx={{marginTop:"30px"}}/>
              <p style={{color:"red",fontSize:"small"}}>{this.state.invalid.mobileNumber}</p>
             
            {/* <Typography sx={{marginTop:"30px"}}> Password </Typography> */}
              <TextField required label="Password" 
              type="password"
              color="secondary" 
              variant="filled" 
              name="password" 
              value={this.state.password}
              onChange = {this.handleChange}
              sx={{marginTop:"30px"}}/>
              <p style={{color:"red",fontSize:"small"}}>{this.state.invalid.password}</p>
             {this.state.toggle?
             (<Link to="/home">
              <Button type="submit" variant="contained" onClick={this.props.setLogin(true)} sx={{marginTop:"20px"}}>Click to submit</Button>
            </Link>) 
            :
            (
              <Button type="submit" variant="contained" sx={{marginTop:"20px"}}>
                Click to submit
              </Button>
            )
            } 

            
            {/* <div className="google-login">
              <Login clientId={this.props.clientId} setLogin={this.props.setLogin}/> 
            </div> */}
            </form>
            
            </Grid>
              
          </div>
        );
      }
}



export default SignUp

