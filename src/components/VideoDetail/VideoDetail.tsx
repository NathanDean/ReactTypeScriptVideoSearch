import React from "react";
import he from "he";
import type { Video } from "../../models";
import "./VideoDetail.css";

export interface VideoDetailProps {
    video: Video | null
}

const VideoDetail = ({video}: VideoDetailProps) => {

    const videoSrc = (
        video !== null ? `https://www.youtube.com/embed/${video.id.videoId}` 
    : 
        undefined
    )

    if(video === null){

        return(

            <div>Select a video</div>

        )

    }

    return(

        <div className = "video-detail">
            
            <div className="videoWrapper">
            
                <iframe 
                    src = {videoSrc} 
                    frameBorder = "0"
                ></iframe>

            </div>

            <h2>{he.decode(video.snippet.title)}</h2>

            <p>{video.snippet.description}</p>

            <a href = {`https://www.youtube.com/watch?v=${video.id.videoId}`}>See more</a>

        </div>

    )

}

export default VideoDetail