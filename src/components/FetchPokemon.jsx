import React, { useState } from 'react';
import axios from 'axios';
//importing react,useEffect & useSate to prevent side effects & track the inputs
const FetchPokemon = () => {//? no props?
//set FetchPokemon to hold the the handelr functions
    const[fetchState, setFetchState] = useState();

    const handleClick = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => { 
                setFetchState(response.data.results)
                console.log(fetchState)
            } )
            .catch(err => console.log(err))
    // adding axios lets us specify the type of request
    };//consumes the data from the API in JS & uses promises
// setFetchState tracks the data from the API response results
    return (//when the handle function is triggered by onclick
        <div>
            <button onClick={handleClick}>Fetch Pokémon</button>
            {(fetchState) ? 
            <>
            {
                fetchState.map((pokemon, i) => 
                { return <div key={i}>{pokemon.name}</div> })}
                </>:<h1>Gotta catch 'em all, Pokémon!</h1>
            }
            
        </div>//fetchState displays the data with .map operater allowing us to copy
        // all the data and we return a key value pair at a specicfic index. 
    );
};

export default FetchPokemon;