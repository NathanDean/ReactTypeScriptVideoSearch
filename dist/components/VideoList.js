import * as React from 'react';
import VideoItem from './VideoItem';
import "./VideoList.css";
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return React.createElement(VideoItem, { key: video.id.videoId, video: video, onVideoSelect: onVideoSelect });
    });
    return (React.createElement("div", { className: "video-list" }, renderedList));
};
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
export default VideoList;
//# sourceMappingURL=VideoList.js.map