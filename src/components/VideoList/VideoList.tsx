// React
import React from "react";

// Components
import VideoItem from "./VideoItem/VideoItem";
import Video from "../../models/Video";

// Types
import VideoListProps from "../../models/VideoListProps";

// Styling
import "./VideoList.css";

const VideoList = ({videos, onVideoSelect}: VideoListProps) => {

    const renderedList = videos.map((video: Video) => {
        return <VideoItem
            key = {video.id.videoId}
            video = {video} 
            onVideoSelect = {onVideoSelect}
         />
    })

    return(
        <div className = "video-list">
            {renderedList}
        </div>
    )

}

export default VideoList