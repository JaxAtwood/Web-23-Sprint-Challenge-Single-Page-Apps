import React from "react";


export default function CharacterCard(props) {
  return (
  <span>
    <h1>{props.name}</h1>
    <h2>{props.status}</h2>
    <h3>{props.species}</h3>
    <h4>{props.gender}</h4>
  </span>
  );
}
