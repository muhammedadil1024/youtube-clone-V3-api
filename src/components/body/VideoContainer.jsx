import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addDetails } from "../../utils/redux/videoSlice";
import { closeMenu } from "../../utils/redux/appSlice";
import VideoShimmer from "../Shimmer";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getVideos = async () => {
            try {
                setLoading(true);
                dispatch(closeMenu());
                const data = await fetch(YOUTUBE_VIDEOS_API);
                if (!data.ok) {
                    throw new Error("Failed to load data, check your connection and try again");
                }
                const jsonData = await data.json();
                setVideos(jsonData?.items);
                dispatch(addDetails(jsonData?.items));
            } catch (e) {
                console.log(e.message);
                
            } finally {
                setLoading(false);
            }
        };
        getVideos();
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <VideoShimmer />
            ) : (
                <div className="flex flex-wrap justify-center mt-5 md:mt-8 gap-4">
                    {videos &&
                        videos.map((video) => (
                            <Link to={"/watch?v=" + video.id} key={video.id}>
                                <VideoCard info={video} />
                            </Link>
                        ))}
                </div>
            )}
        </>
    );
}

export default VideoContainer