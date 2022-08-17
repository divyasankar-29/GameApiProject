import React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

class AddPagination extends React.Component{

    changeHandler=(e,value) => {
         this.props.handlePagination(value)
    }

    render(){
        return(
            <Stack spacing={1}>
                <Pagination variant="contained" color="secondary" count={this.props.count} onChange={this.changeHandler} sx={{alignSelf:"center"}} />   
            </Stack>
        )
    }
}

export default AddPagination