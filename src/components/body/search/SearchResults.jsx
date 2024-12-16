import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../../../utils/config";
import FilterButtons from "../FilterButtons";
import SearchVideoCard from "./SearchVideoCard";
import { useDispatch } from "react-redux";
import { addDetails } from "../../../utils/redux/videoSlice";
import { SearchShimmer } from "../../Shimmer";

const SearchResults = () => {

    const [ searchParams ] = useSearchParams();
    const searchQuery = searchParams.get("search_query");
    const encodedSearchQuery = encodeURIComponent(searchQuery);
    const [searchVideos, setSearchVideos] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getSearchVideos = async () => {
            try {
                setLoading(true);
                const data = await fetch(`${YOUTUBE_SEARCH_RESULTS_API}${encodedSearchQuery}&key=${GOOGLE_API_KEY}`);
                if (!data.ok) {
                    throw new Error("Failed to load data, check your connection and try again");
                }
                const jsonData = await data.json();
                setSearchVideos(jsonData?.items);
                dispatch(addDetails(jsonData?.items));
            } catch (e) {
                console.log(e.message);
            } finally {
                setLoading(false);
            }
        };
        getSearchVideos();
    }, [encodedSearchQuery, dispatch]);

    const handlePlaylistClick = (event, video) => {
        let alertMessage = "";

        if (video.id.playlistId) {
            alertMessage = "This is a playlist. Please select an individual video to play.";
        } else if (video.id.kind === "youtube#channel") {
            alertMessage = "This is a YouTube Channel. Please select an individual video to play.";
        }

        if (alertMessage) {
            event.preventDefault();
            alert(alertMessage);
        }
    };

    return (
        <>
            {loading ? (
                <SearchShimmer />
            ) : (
                <div className="px-2 md:px-4">
                    <FilterButtons />
                    <div className="mt-8">
                        {searchVideos &&
                            searchVideos.map((video) => (
                                <Link
                                    to={"/watch?v=" + video.id.videoId}
                                    key={video.id.videoId || video.id.playlistId || video.id.channelId}
                                    onClick={(e) => handlePlaylistClick(e, video)}
                                >
                                    <SearchVideoCard info={video} />
                                </Link>
                            ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchResults