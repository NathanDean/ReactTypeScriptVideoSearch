import React from 'react'
import VideoItem from './VideoItem/VideoItem';
import type { Video, VideoListProps } from "../../types"
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