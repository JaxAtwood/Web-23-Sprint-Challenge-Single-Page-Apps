import React from "react";
import { Box } from "./Styles";


export default function CharacterCard(props) {
  return (
  <Box>
    <h1>{props.name}</h1>
    <h2>{props.status}</h2>
    <h3>{props.species}</h3>
    <h4>{props.gender}</h4>
  </Box>
  );
}

