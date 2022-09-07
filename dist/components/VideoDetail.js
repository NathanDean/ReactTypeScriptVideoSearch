import * as React from "react";
import * as he from "he";
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
// class VideoDetail extends React.Component {
//     render(){
//         const video = this.props.video;
//         const videoSrc = (
//             video !== null ? `https://www.youtube.com/embed/${video.id.videoId}` 
//         : 
//             undefined
//         )
//         if(video === null){
//             return(
//                 <div>Select a video</div>
//             )
//         }
//         return(
//             <div className = "video-detail">
//                 <div className="videoWrapper">
//                     <iframe 
//                         src = {videoSrc} 
//                         frameBorder = "0"
//                     ></iframe>
//                 </div>
//                 <h2>{he.decode(video.snippet.title)}</h2>
//                 <p>{video.snippet.description}</p>
//                 <a href = {`https://www.youtube.com/watch?v=${video.id.videoId}`}>See more</a>
//             </div>
//         )
//     }
// }
export default VideoDetail;
//# sourceMappingURL=VideoDetail.js.map