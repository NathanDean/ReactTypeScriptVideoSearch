import "./App.css";

import React from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

import youtube from "../api/youtube";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }
    
    onSearchSubmit = query => {
        
        youtube.get("/search",
            {
                params: {
                    q: query
                }
            }
        )
        .then(response => this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        }))
        .catch(error => {
            console.log(error);
        })
    
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
        console.log(this.state.selectedVideo)
    }

    componentDidMount(){

        this.onSearchSubmit("news");

    }

    render(){

        return(
            
                <div className = "container">

                    <h1>Video Search</h1>
                    
                    <SearchBar 
                        onSearchSubmit = {this.onSearchSubmit}
                    />

                    <div className = "video-container">

                        <VideoDetail 
                            video = {this.state.selectedVideo} 
                        />

                        <VideoList 
                            videos = {this.state.videos} 
                            onVideoSelect ={this.onVideoSelect} 
                        />

                    </div>
                    
                </div>

        )

    }

}

export default App