import Video from "./Video";

export default interface VideoListProps {
    videos: Video[],
    onVideoSelect(video: Video): void
}