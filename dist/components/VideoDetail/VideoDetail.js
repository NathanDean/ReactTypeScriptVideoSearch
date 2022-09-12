import React from "react";
import he from "he";
import "./VideoDetail.css";
const VideoDetail = ({ video }) => {
    const videoSrc = (video !== null ? `https://www.youtube.com/embed/${video.id.videoId}`
        :
            undefined);
    if (video === null) {
        return (React.createElement("div", null, "Select a video"));
    }
    return (React.createElement("div", { className: "video-detail" },
        React.createElement("div", { className: "videoWrapper" },
            React.createElement("iframe", { src: videoSrc, frameBorder: "0" })),
        React.createElement("h2", null, he.decode(video.snippet.title)),
        React.createElement("p", null, video.snippet.description),
        React.createElement("a", { href: `https://www.youtube.com/watch?v=${video.id.videoId}` }, "See more")));
};
export default VideoDetail;
//# sourceMappingURL=VideoDetail.js.map