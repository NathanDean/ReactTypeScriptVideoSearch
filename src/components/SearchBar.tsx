import * as React from "react";
import { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({onSearchSubmit}) => {

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

export default SearchBar