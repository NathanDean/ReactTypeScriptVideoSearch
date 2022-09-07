import * as React from 'react'
import VideoItem from './VideoItem';
import "./VideoList.css";
import type { Video } from "../types"

const VideoList = ({videos, onVideoSelect}) => {

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

// class VideoList extends React.Component {
    
//     render(){

//         const videos = this.props.videos;
//         const onVideoSelect = this.props.onVideoSelect;

//         const renderedList = videos.map(video => {
//             return <VideoItem
//                 key = {video.id.videoId}
//                 video = {video} 
//                 onVideoSelect = {onVideoSelect}
//              />
//         })

//         return(
//             <div className = "video-list">
//                 {renderedList}
//             </div>
//         )
//     }
// }

export default VideoList