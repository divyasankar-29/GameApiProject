import React from "react";
import { Grid,Typography,Box,Card,CardContent,Skeleton } from "@mui/material";
import AddPagination from "./AddPagination";
import {Link} from "react-router-dom"


class Display extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pageNumber : 1
        }
    }

    handlePagination=(pagenum) =>{
        this.setState({
            pageNumber : pagenum
        })
    }
    

    render(){
        const { finalItems } = this.props;
        const gamesPerPage = 12;
        const pagesCount = Math.ceil(finalItems.length/gamesPerPage);
        const endIndex = this.state.pageNumber*gamesPerPage;
        const startIndex = endIndex-gamesPerPage;
        const result = finalItems.slice(startIndex,endIndex);

        return(
            <>
            <div>
                <Grid container sx={{marginLeft:"10px"}} wrap="wrap" justifyContent="center">
                    {
                        finalItems[0]? result.map((game,index) => (
                            <Box key={index} sx={{width:400,marginRight:3,minHeight:300}}>
                                <Card sx={{ mb: 2,backgroundColor:"lightblue"}}>
                                <CardContent>
                                <div>
                                    {game ? (
                                        <Link to={`details/${game.id}`}>
                                            <img src={game.thumbnail} alt={game.title} />
                                        </Link>
                                    ):null}
                                    {game ? (
                                        <Box sx={{pr:2}}>
                                            <Typography>{game.title}</Typography>
                                            <a href={game.game_url}>Click to view the game</a>
                                        </Box>
                                    ):(
                                        <Box sx={{ pt: 0.5 }}>
                                            <Skeleton />
                                            <Skeleton width="100%" />
                                        </Box>
                                    )}
                                </div>
                                </CardContent>
                                </Card>

                            </Box>
                        )): <p>No Matches Found</p>
                    }
                </Grid>
            </div>

            {result[0] ?  
            <div>
                <AddPagination handlePagination={this.handlePagination} count={pagesCount} />
            </div> : null
        }
            </>
            
        )
    }
}

export default Display