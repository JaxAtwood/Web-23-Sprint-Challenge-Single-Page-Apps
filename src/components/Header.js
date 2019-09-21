import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styled from "styled-components";


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavMaybeIDK>
        <StyledLink to="/">Welcome Page</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/locations">Locations</StyledLink>
        <StyledForm>
        <SearchForm />
        </StyledForm>
      </NavMaybeIDK>
    </header>
  );
}

const StyledLink = styled(Link) `
  text-decoration: none;
  color: teal;
  margin: 20px;
`;

const NavMaybeIDK = styled.div `
  border: pink solid 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledForm = styled.div `
  border: red dashed 2px;
  margin-left: 200px;
`