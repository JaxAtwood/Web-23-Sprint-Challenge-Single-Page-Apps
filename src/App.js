import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchBar from "./components/SearchForm";
import { Route } from "react-router-dom";

function App() {
  const [param, setParam] = useState();
  const searchIt = search => {
    setParam([...param, search]);
  };

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <SearchBar />
    </main>
  );
}

export default App;