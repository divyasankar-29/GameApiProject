import React from "react";

import axios from "axios";
import { MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    root:{
        width : "200px",
         height: "50px",
         border : "lightblue"
    }})

class Sorting extends React.Component{


    handleChange=(e) => {

      this.props.setSortValue(e.target.value)
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

        const {classes} = this.props;
    return(
    <div>
     <FormControl className={classes.root}>
        <InputLabel id="select-label">SortBy</InputLabel>
        <Select
         labelId="select-label"
         id="demo-simple-select"
          value={this.props.sortValue}
          label="Filter"
          onChange={this.handleChange}
          variant="filled"
        >
          <MenuItem value="release-date">Date of Release</MenuItem>
          <MenuItem value="alphabetical">Alphabetical(A-Z)</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
        </Select>
      </FormControl>
    </div>
            
        )
    }
  }


export default withStyles(styles)(Sorting)