interface Thumbnail {
    height: number;
    url: string;
    width: number;
}

export interface Video {
    
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

export interface YouTubeResponse {
    data: {
        etag: string;
        items: Video[];
        kind: string;
        nextPageToken: string;
        pageInfo: {
            resultsPerPage: number;
            totalResults: number
        };
        regionCode: string;
    }
}

export interface SearchBarProps {
    onSearchSubmit(query: string): void
}

export interface VideoDetailProps {
    video: Video | null
}

export interface VideoListProps {
    videos: Video[],
    onVideoSelect(video: Video): void
}

export interface VideoItemProps {
    video: Video,
    onVideoSelect(video: Video): void
}