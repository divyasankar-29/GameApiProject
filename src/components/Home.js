import React,{useEffect, useState} from "react";
import axios from "axios";
import SearchGame from "./SearchGame";
import Sorting from "./Sorting";
import Display from "./Display";
import Filter from "./Filter";
import { Grid} from "@mui/material";

function Home(){

    const filterOptions = ["MMORPG","Shooter","Strategy","MOBA",
    "Racing","Sports","Social","Card","MMO","Fantasy","Fighting"];
    const [query,setQuery] = useState("");
    const [items,setItems] = useState([]);
    const [finalItems,setFinalItems] = useState([]);
    const[isLoading,setLoading] =useState(true);
  //   this.state = {
  //     query : "",
  //     items: [],
  //     finalItems : [],
  //     isLoading : false,
  //     sortValue : "",
  //     filterValue : filterOptions[0],
  //     searchOptions : ["release data", "Ascending", "Descending"]
  //   }
  // }

  useEffect(() =>{
    axios
    .get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      mode: "no-cors",
      headers: {
        'X-RapidAPI-Key': '179d14e898msh7881df0aca9ab89p19a136jsndcd8ac9ae786',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }) 
    .then((response) => {
      setItems(response.data);
      setFinalItems(response.data);
      if(response.data) {
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log(error.name)
      alert(`Could not fetch data`)
    });
  },[])

  return (
    <div className="home_content">

      {isLoading ? 
     (<p style={{marginLeft:"20%"}}>Loading...</p>) :

        /* <Search games={this.state.items} /> */
        (<div>
            <SearchGame query = {query} 
              setQuery={setQuery}
              items={items} 
              setItems={setItems} 
              finalItems={finalItems} 
              setFinalItems={setFinalItems} 
           />
           <Grid container wrap="wrap" justifyContent="center" spacing={2} sx={{marginTop:"10px"}} >
           <Filter filterOptions={filterOptions} items= {items} setFinalItems={setFinalItems} />
            <Sorting setFinalItems={setFinalItems}/>
          </Grid>
          <br /><br />
          <Display finalItems = {finalItems} />
        </div>
        )}
        <br /><br />


      </div>

    )

    // })}
  }

export default Home;