import Video from "./Video";

export default interface VideoItemProps {
    video: Video,
    onVideoSelect(video: Video): void
}