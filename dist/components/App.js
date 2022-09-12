import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./VideoDetail/VideoDetail";
import VideoList from "./VideoList/VideoList";
import youtube from "../api/youtube";
import "./App.css";
const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const onSearchSubmit = (query) => {
        youtube.get("/search", {
            params: {
                q: query
            }
        })
            .then((response) => {
            setVideos(response.data.items);
            if (response.data.items[0] !== null) {
                setSelectedVideo(response.data.items[0]);
            }
        })
            .catch((error) => {
            console.log(error);
        });
    };
    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };
    useEffect(() => {
        onSearchSubmit("news");
    }, []);
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null, "Video Search"),
        React.createElement(SearchBar, { onSearchSubmit: onSearchSubmit }),
        React.createElement("div", { className: "video-container" },
            React.createElement(VideoDetail, { video: selectedVideo }),
            React.createElement(VideoList, { videos: videos, onVideoSelect: onVideoSelect }))));
};
export default App;
//# sourceMappingURL=App.js.map