import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


const CharacterList= () => {
  // TODO: Add useState to track data from useEffect
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      const charData = res.data.results;
      console.log(charData);
      setState(charData);
    }, [])
    .catch(error => {
      console.log(error);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {state.map(data => {
          return (
            <CharacterCard 
              key={data.id}
              id={data.id}
              name={data.name}
              status={data.status}
              species={data.species}
              gender={data.gender}
            />
          )
      })}
    </section>
  );
}

export default CharacterList;