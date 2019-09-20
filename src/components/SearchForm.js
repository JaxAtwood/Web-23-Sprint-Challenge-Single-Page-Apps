import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const results = SOMETHING.filter(SOMETHINGBANANA => 
  //     SOMETHINGBANANA.toLowerCase().includes(searchValue)
  //   );
  //   setSearchResults(results);
  // }, [searchValue]);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    
    <form className="search">
      
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  )
}

export default Search;



// import React, { useState, useEffect } from "react";
// import CharacterList from "./CharacterList";

// export default function SearchForm() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([""]);

//   useEffect(() => {
//     const results = character.filter(character =>
//       character.toLowerCase().includes(searchTerm)
//       );
//       setSearchResults(results);
//   }, [searchTerm]);

//     const handleChange = event => {
//       setSearchTerm(event.target.value);
//     };

 

//   return (
//     <section className="search-form">
//       <form>
//         <label for="name">Search: </label>
//         <input
//           id="character"
//           type="text"
//           name="characters"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleChange}
//           />
//       </form>
//       <div className="character-list">
//         <ul>
//           {searchResults.map(character => (
//             <li>{character.name}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default SearchForm;




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



////////WORKS!!! SEARCH BAR RENDERS BUT IS NOT FUNCTIONAL! COPYPASTS TO ADD USE EFFECT HOOK AND FILTER THROUGH... FOUND ON FREECODECAMP. TRYING TO BLEND CHRISTINAS CODE SANDBOX AND FREE CODE CAMP'S CODE

        // import React, { useState } from "react";

        // const Search = (props) => {
        //   const [searchValue, setSearchValue] = useState("");

        //   const handleSearchInputChanges = (e) => {
        //     setSearchValue(e.target.value);
        //   }

        //   const resetInputField = () => {
        //     setSearchValue("")
        //   }

        //   const callSearchFunction = (e) => {
        //     e.preventDefault();
        //     props.search(searchValue);
        //     resetInputField();
        //   }

        //   return (
        //     <form className="search">
        //       <input
        //         value={searchValue}
        //         onChange={handleSearchInputChanges}
        //         type="text"
        //       />
        //       <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        //     </form>
        //   )
        // }

        // export default Search;