import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";
import { Route } from "react-router-dom";
// import styled from "styled-components";
import { Body } from "./components/Styles";

function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />   
      <Body>
      <Route path="/characters" component={CharacterList} />
      </Body>
      <Route path="/locations" component={LocationsList} />
    </main>
  );
}

export default App;