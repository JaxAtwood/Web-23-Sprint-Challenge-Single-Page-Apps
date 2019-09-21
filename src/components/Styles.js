import styled from "styled-components";

//Called on Card
const Box = styled.div`
background: turquoise;
max-width: 30%;
margin: 0 auto;
border: 20px solid magenta;
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-align: center;
`

const TextFont = styled.h1 `
font-family: 'Chilanka', cursive;
font-size: 1rem;
`

const Body = styled.div `
border: blue solid 5px;
// display: flex;

// flex-wrap: wrap;
`

export { Box, TextFont, Body };