import "./SearchBar.css"

import React from "react";

class SearchBar extends React.Component {

    state = {
        query: ""
    }
    
    onFormSubmit = event => {

        event.preventDefault();

        this.props.onSearchSubmit(this.state.query);

    }
    
    onSearchChange = event => {

        this.setState({query: event.target.value})

    }
    
    render(){
    
        return(

            <div className = "searchbar-container">

                <form 
                    action = ""
                    onSubmit = {this.onFormSubmit}
                >
                    <input 
                        type = "text" 
                        placeholder = "Enter a search term"
                        value = {this.state.query}
                        onChange = {this.onSearchChange}
                    />

                </form>

            </div>
        
        )

    }

}

export default SearchBar