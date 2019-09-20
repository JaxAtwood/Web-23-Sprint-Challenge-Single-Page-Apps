// import React, { useState, useEffect } from "react";

// export default function SearchForm() {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState("");

//   useEffect(() => {
//     const results = characters.filter(character =>
//       character.toLowerCase().includes(search)
//       );
//       setResults(results);
//   }, [search]);

//     const handleChange = event => {
//       setSearch(event.target.value);
//     };

//   return (
//     <section className="search-form">
//       <form>
//         <label for="name">
//           Search: 
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="textfield"
//           placeholder="Search"
//           value={search}
//           onChange={handleChange}
//           />
//       </form>
//       <div className="character-list">
//         <ul>
//           {results.map(character => (
//             <li>{character}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={term: ""};
  }
  onInputChange(term) {
    const name = this.props.searchBoxName
    this.setState({term});
    if(this.props.onSearchTermChange){
      this.props.onSearchTermChange({name, term})
    }
  }

  render() {
    const name = this.props.searchBoxName
      return (
        <div className="search-box">
        <div className="search-icon"></div>
          <input 
          name={name} 
          className="search-input" 
          id="search" type="text" 
          placeholder="Search" 
          value={this.state.term}
          onChange={event=>this.onInputChange(event.target.value)} 
          onKeyPress={this.props.onKeyPress|| null}/>
          <button>Submit</button>
        </div>
       
      )
  }
}

export default SearchBar;