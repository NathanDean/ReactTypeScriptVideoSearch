import * as React from "react";
import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSearchSubmit }) => {
    const [query, setQuery] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(query);
    };
    const onSearchChange = (e) => {
        setQuery(e.target.value);
    };
    return (React.createElement("div", { className: "searchbar-container" },
        React.createElement("form", { action: "", onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", placeholder: "Enter a search term", value: query, onChange: onSearchChange }))));
};
// class SearchBar extends React.Component {
//     state = {
//         query: ""
//     }
//     onFormSubmit = event => {
//         event.preventDefault();
//         this.props.onSearchSubmit(this.state.query);
//     }
//     onSearchChange = event => {
//         this.setState({query: event.target.value})
//     }
//     render(){
//         return(
//             <div className = "searchbar-container">
//                 <form 
//                     action = ""
//                     onSubmit = {this.onFormSubmit}
//                 >
//                     <input 
//                         type = "text" 
//                         placeholder = "Enter a search term"
//                         value = {this.state.query}
//                         onChange = {this.onSearchChange}
//                     />
//                 </form>
//             </div>
//         )
//     }
// }
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map