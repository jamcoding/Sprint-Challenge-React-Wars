import React from "react";

const StarWarsCard = props => {
    console.log(props);

    return (
        <div>
            <p>{props.names.name}</p>
            <p>{props.names.gender}</p>
        </div>
    )
}

export default StarWarsCard;
