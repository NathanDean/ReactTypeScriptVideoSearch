// React
import React from "react";
import { useState, useEffect } from "react";

// Components
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./VideoDetail/VideoDetail";
import VideoList from "./VideoList/VideoList";

// API
import youtube from "../api/youtube";

// Types
import type { AxiosError } from "../../node_modules/axios/index";
import Video from "../models/Video";
import YouTubeResponse from "../models/YouTubeResponse";

// Styling
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

export default App