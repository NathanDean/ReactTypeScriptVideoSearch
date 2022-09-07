import * as React from 'react'
import VideoItem from './VideoItem';
import "./VideoList.css";

interface Thumbnail {
    height: number;
    url: string;
    width: number;
}

interface Video {
    
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: {
            default: Thumbnail;
            high: Thumbnail;
            medium: Thumbnail
        };
        title: string
    }
}

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