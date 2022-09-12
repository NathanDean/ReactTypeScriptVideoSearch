import React from "react";
import { useState } from "react";
import SearchBarProps from "../../models/SearchBarProps";
import "./SearchBar.css"

const SearchBar = ({onSearchSubmit}: SearchBarProps) => {

    const [query, setQuery] = useState<string>("");

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSearchSubmit(query);
    }

    const onSearchChange = (e: React.FormEvent) => {
        setQuery((e.target as HTMLInputElement).value);
    }

    return(

        <div className = "searchbar-container">

            <form 
                action = ""
                onSubmit = {onFormSubmit}
            >
                <input 
                    type = "text" 
                    placeholder = "Enter a search term"
                    value = {query}
                    onChange = {onSearchChange}
                />

            </form>

        </div>
    
    )

}

export default SearchBar