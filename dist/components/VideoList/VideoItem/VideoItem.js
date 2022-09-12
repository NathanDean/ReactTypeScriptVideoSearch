import React from "react";
import he from "he";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
    return (React.createElement("div", { className: "video-item", onClick: () => onVideoSelect(video) },
        React.createElement("img", { src: video.snippet.thumbnails.medium.url }),
        React.createElement("div", null,
            React.createElement("p", { className: "item-title" }, he.decode(video.snippet.title)))));
};
export default VideoItem;
//# sourceMappingURL=VideoItem.js.map