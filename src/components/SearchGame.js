import React ,{useEffect, useState} from "react";

function SearchGame({query,setQuery,items,setFinalItems,filterValue}){

    useEffect(() => {
        setFinalItems([...items.filter((y) => 
            (y.title.toLowerCase().includes(query))&&(y.genre.includes(filterValue)))])
    },[query])

     
    // handleChange(event){
    //     this.setState({
    //         query : event.target.value
    //     })
    // }
    

        return(
            <div>
                <input  className="search_game"
                type="text"
                value = {query} 
                onChange={(e) => {setQuery(e.target.value)}} 
                placeholder="Search Game"/>
            </div>
        )
}

export default SearchGame