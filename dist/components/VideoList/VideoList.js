import React from 'react';
import VideoItem from './VideoItem/VideoItem';
import "./VideoList.css";
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return React.createElement(VideoItem, { key: video.id.videoId, video: video, onVideoSelect: onVideoSelect });
    });
    return (React.createElement("div", { className: "video-list" }, renderedList));
};
export default VideoList;
//# sourceMappingURL=VideoList.js.map