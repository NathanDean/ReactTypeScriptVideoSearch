import "./VideoList.css"

import React from 'react'

import VideoItem from './VideoItem';

class VideoList extends React.Component {
    
    render(){

        const videos = this.props.videos;
        const onVideoSelect = this.props.onVideoSelect;

        const renderedList = videos.map(video => {
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
}

export default VideoList