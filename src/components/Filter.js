import React from "react";
import {FormControl,InputLabel,MenuItem,Select} from "@mui/material";
import axios from "axios";

class Filter extends React.Component{
    // handleChange(e){
    //     this.setState({
    //         value : e.target.value
    //     })

    //     console.log(this.state.value);
    // }

    handleChange =(e) =>{
        // this.props.setFinalItems(...this.props.items.filter(function(x){return(x.genre===this.state.value)}));
        this.props.setFilterValue(e.target.value)
        console.log("******",this.props.filterValue);
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: e.target.value},
            headers: {
              'X-RapidAPI-Key':  '179d14e898msh7881df0aca9ab89p19a136jsndcd8ac9ae786',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };
          
          axios.request(options).then((response) => {
              console.log(response.data);
              this.props.setFinalItems((response.data));
          }).catch((error) => {
              console.error(error);
          });
    }
        //   });
    render(){
        console.log("****", this.props.filterValue)
        return(
            <FormControl sx={{width:"20%",height:"50px"}}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
          value={this.props.filterValue}
          label="Filter"
          onChange={this.handleChange}
          variant="outlined"    
        >
            {this.props.filterOptions.map((filter,index) => {return(
                <MenuItem key={index} value={filter}>
                    {filter}
                </MenuItem>
            )})
    }
        </Select>
      </FormControl>
        )
    }
}

export default Filter