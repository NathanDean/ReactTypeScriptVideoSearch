import React from "react";
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
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map