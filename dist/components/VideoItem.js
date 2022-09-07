import * as React from "react";
import * as he from "he";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
    return (React.createElement("div", { className: "video-item", onClick: () => onVideoSelect(video) },
        React.createElement("img", { src: video.snippet.thumbnails.medium.url }),
        React.createElement("div", null,
            React.createElement("p", { className: "item-title" }, he.decode(video.snippet.title)))));
};
// class VideoItem extends React.Component {
//     render(){
//         const video = this.props.video;
//         const onVideoSelect = this.props.onVideoSelect;
//         return(
//             <div
//                 className = "video-item"
//                 onClick = {() => onVideoSelect(video)}>
//                 <img 
//                     src = {video.snippet.thumbnails.medium.url} 
//                 />
//                 <div>
//                     <p className = "item-title">
//                         {he.decode(video.snippet.title)}
//                     </p>
//                 </div>
//             </div> 
//         )
//     }
// }
export default VideoItem;
//# sourceMappingURL=VideoItem.js.map