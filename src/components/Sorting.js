import React from "react";

import axios from "axios";
import { MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

// const styles = () => ({
//     root:{
//       backgroundColor : "skyblue",
//       color: "black",
//       marginLeft : "90px",
//       marginTop : "5px"
//     }})

class Sorting extends React.Component{

  constructor(){
    super();
    this.state={
      value:""
    }
  }

    handleChange=(e) => {

      this.setState({
        value:e.target.value
      })
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {'sort-by': e.target.value,},
            headers: {
              'X-RapidAPI-Key': '179d14e898msh7881df0aca9ab89p19a136jsndcd8ac9ae786',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };
          
          axios.request(options)
          .then((response) => {
              this.props.setFinalItems(response.data)
          }).catch((error) => {
              console.error(error);
          }
          )
    }

    render(){

        // const { classes } = this.props;
    return(
    <div>
     <FormControl sx={{width:"200%",height:"50px",border:"lightblue"}}>
        <InputLabel id="select-label">SortBy</InputLabel>
        <Select
         labelId="select-label"
         id="demo-simple-select"
          value={this.state.value}
          label="Filter"
          onChange={this.handleChange}
          variant="filled"
        >
          <MenuItem value="release-date">release_date</MenuItem>
          <MenuItem value="alphabetical">alphabetical(A-Z)</MenuItem>
          <MenuItem value="popularity">popularity</MenuItem>
        </Select>
      </FormControl>
    </div>
            
        )
    }
  }


export default Sorting