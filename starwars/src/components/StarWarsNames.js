import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

const StarWarsNames = () => {

    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [characters, setCharacters] = useState([]);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    useEffect(() => {
      axios
        .get("https://swapi.co/api/people/")
        .then(response => setCharacters(response.data.results))
        .catch(error => console.log('there is an error', error));
    }, []);

    console.log('initial render', characters);

    return (
        <div>
            {characters.map(names => (
                <StarWarsCard key={names.name} names={names} />
            ))}
        </div>
    );
};

export default StarWarsNames;
