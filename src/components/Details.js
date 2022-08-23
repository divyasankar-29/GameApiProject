
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Card,CardContent,CardMedia,Typography } from "@mui/material";

const useStyles=makeStyles({
  root:{
    marginLeft:"30%"
  },
  align:{
    width: "50%",
    height: "50%",
    marginLeft: "25%",
    marginTop: "2%"
  }
})

function Details(){

    const {id} = useParams();
    const [details,setDetails] = useState({})

    const classes = useStyles()

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: id},
            headers: {
              'X-RapidAPI-Key':  '179d14e898msh7881df0aca9ab89p19a136jsndcd8ac9ae786',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setDetails((response.data));
          }).catch(function (error) {
              console.error(error);
          });
    },[id])

    const {
        thumbnail,
        title,
        genre,
        developer,
        publisher,
        release_date,
        platform,
        short_description,
        description,
        game_url,
      } = details
    return(
        <div>
          <h1 className={classes.root}>Description About The Game</h1>
          <Card sx={{mb:5}}></Card>
          <CardContent sx={{backgroundColor:"peachpuff",
          boxShadow:"5px 5px 10px grey",
          marginLeft:"10%",
          marginRight:"10%",
          marginBottom:"10%"}}>
          <img className={classes.align} src={thumbnail} alt="thubmnail images" />
          <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="15px">
        <b>
          {short_description}
          {description}
          </b>
          <div className="display">
          <h4>Category : {genre} </h4>
          <h4>Developed By : {developer}</h4> 
          <h4>Published By : {publisher}</h4> 
          <h4>Release date : {release_date}</h4> 
          <h4>Supported Platforms : {platform}</h4> 
          <a href={game_url} >
            <b>Click here to view the game{" "}</b>
          </a>
          </div>
         
        </Typography>
          </CardContent>
          {/* <p className="title">{title} </p> */}
          
          {/* <p className="genre">Category : {genre}</p>
          <div className="developer">
          <p>Developed By : {developer}</p>
          <p>Published By : {publisher}</p> 
          <p>Release date : {release_date}</p>
          <p>Supported Platforms : {platform}</p>
          <p>Short Description: {short_description}</p>
          <p>Description: <br />{description}</p><br />
          <a href={game_url} >
            <b>Click here to view the game{" "}</b>
          </a> */}
          </div>

    )

}
export default Details