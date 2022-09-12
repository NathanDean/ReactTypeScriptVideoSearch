import Video from "./Video";

export default interface YouTubeResponse {
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