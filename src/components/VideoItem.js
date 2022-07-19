import "./VideoItem.css";

import React from "react";
import he from "he";

class VideoItem extends React.Component {
    
    render(){

        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;

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

}

export default VideoItem