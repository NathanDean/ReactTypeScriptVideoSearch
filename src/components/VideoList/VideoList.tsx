import React from 'react'
import VideoItem from './VideoItem/VideoItem';
import type { Video } from "../../models"
import "./VideoList.css";

export interface VideoListProps {
    videos: Video[],
    onVideoSelect(video: Video): void
}

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