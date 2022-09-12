import React from "react";
import he from "he";
import { Video } from "../../../models";
import "./VideoItem.css";

export interface VideoItemProps {
    video: Video,
    onVideoSelect(video: Video): void
}

const VideoItem = ({video, onVideoSelect}: VideoItemProps) => {

    return(

        <div
            className = "video-item"
            onClick = {() => onVideoSelect(video)}>
            
            <img 
                src = {video.snippet.thumbnails.medium.url} 
            />

            <div>

                <p className = "item-title">
                
                    {he.decode(video.snippet.title)}

                </p>

            </div>

        </div> 

    )

}

export default VideoItem