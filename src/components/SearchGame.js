import React ,{useEffect} from "react";

function SearchGame({query,setQuery,items,setFinalItems}){

    useEffect(() => {
        setFinalItems([...items.filter((y) => 
            (y.title.toLowerCase().includes(query) || 
            y.developer.toLowerCase().includes(query) ||
            y.publisher.toLowerCase().includes(query)))])

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