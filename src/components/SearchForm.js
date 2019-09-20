import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
  }, [searchTerm]);

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

  return (
    <section className="search-form">
      <form>
        <label for="name">Search: </label>
        <input
          id="name"
          type="text"
          name="characters"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SearchForm;




//----------------------CLASS COMPONENT CODE (WORKS BUT DOESN'T SEARCH, ONLY RENDERS SEARCH BAR!
//----------------------TRIED ADDING IMPORT TO CHARACTERLIST AS PROPS AND ATTRIBUTES WITH NO LUCK
        // import React from "react";

        // class SearchBar extends React.Component {
        //   constructor(props) {
        //     super(props);
        //     this.state={term: ""};
        //   }
        //   onInputChange(term) {
        //     const name = this.props.searchBoxName
        //     this.setState({term});
        //     if(this.props.onSearchTermChange){
        //       this.props.onSearchTermChange({name, term})
        //     }
        //   }

        //   render() {
        //     const name = this.props.searchBoxName
        //       return (
        //         <div className="search-box">
        //         <div className="search-icon"></div>
        //           <input 
        //           name={name} 
        //           className="search-input" 
        //           id="search" type="text" 
        //           placeholder="Search" 
        //           value={this.state.term}
        //           onChange={event=>this.onInputChange(event.target.value)} 
        //           onKeyPress={this.props.onKeyPress|| null}/>
        //           <button>Submit</button>
        //         </div>
              
        //       )
        //   }
        // }

        // export default SearchBar;