import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import "./App.css";

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearchSubmit = query => {
        youtube.get("/search",
            {
                params: {
                    q: query
                }
            }
        )
        .then(response => {
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const onVideoSelect = video => {
        setSelectedVideo(video)
    }

    useEffect(() => {
        onSearchSubmit("news")
    }, [])

    return(
            
        <div className = "container">

            <h1>Video Search</h1>
            
            <SearchBar 
                onSearchSubmit = {onSearchSubmit}
            />

            <div className = "video-container">

                <VideoDetail 
                    video = {selectedVideo} 
                />

                <VideoList 
                    videos = {videos} 
                    onVideoSelect ={onVideoSelect} 
                />

            </div>
            
        </div>

)

}

// class App extends React.Component {

//     state = {
//         videos: [],
//         selectedVideo: null
//     }
    
//     onSearchSubmit = query => {
        
//         youtube.get("/search",
//             {
//                 params: {
//                     q: query
//                 }
//             }
//         )
//         .then(response => this.setState({
//             videos: response.data.items,
//             selectedVideo: response.data.items[0]
//         }))
//         .catch(error => {
//             console.log(error);
//         })
    
//     }

//     onVideoSelect = video => {
//         this.setState({selectedVideo: video})
//         console.log(this.state.selectedVideo)
//     }

//     componentDidMount(){

//         this.onSearchSubmit("news");

//     }

//     render(){

//         return(
            
//                 <div className = "container">

//                     <h1>Video Search</h1>
                    
//                     <SearchBar 
//                         onSearchSubmit = {this.onSearchSubmit}
//                     />

//                     <div className = "video-container">

//                         <VideoDetail 
//                             video = {this.state.selectedVideo} 
//                         />

//                         <VideoList 
//                             videos = {this.state.videos} 
//                             onVideoSelect ={this.onVideoSelect} 
//                         />

//                     </div>
                    
//                 </div>

//         )

//     }

// }

export default App