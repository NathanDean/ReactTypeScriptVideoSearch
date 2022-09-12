import React from "react";
import { useState, useEffect } from "react";
import { AxiosError } from "../../node_modules/axios/index";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import type { Video, YouTubeResponse } from "../types";
import "./App.css";

const App = () => {

    const [videos, setVideos] = useState<Video[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    const onSearchSubmit = (query: string) => {
        youtube.get("/search",
            {
                params: {
                    q: query
                }
            }
        )
        .then((response: YouTubeResponse) => {
            setVideos(response.data.items);
            if(response.data.items[0] !== null){
                setSelectedVideo(response.data.items[0]);
            }
        })
        .catch((error: AxiosError) => {
            console.log(error);
        })
    }

    const onVideoSelect = (video: Video) => {
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