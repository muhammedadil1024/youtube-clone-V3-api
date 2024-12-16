import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../../../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { GOOGLE_API_KEY, YOUTUBE_CHANNELS_API } from "../../../utils/config";
import LiveChat from "./LiveChat";
import { addMessage } from "../../../utils/redux/chatSlice";
import { WatchShimmer } from "../../Shimmer";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [ searchParams ] = useSearchParams();
    const videoDetails = useSelector((store) => store.video.videoDetails);
    const [loading, setLoading] = useState(false);
    
    const [subscribe, setSubscribe] = useState(false);

    const filteredVideo = videoDetails.find(
        (video) => video.id === searchParams.get("v") || video.id?.videoId === searchParams.get("v")
    );

    const { title, description, channelId } = filteredVideo?.snippet ?? "";
    const [channelDetails, setChannelDetails] = useState("");
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const getSpecificChannel = async () => {
            if (!channelId) return;
            try {
                setLoading(true);
                dispatch(closeMenu());
                const data = await fetch(`${YOUTUBE_CHANNELS_API}${channelId}&key=${GOOGLE_API_KEY}`);
                if (!data.ok) {
                    throw new Error("Failed to load data, check your connection and try again");
                }
                const jsonData = await data.json();
                setChannelDetails(jsonData.items[0]);
            } catch (e) {
                console.log(e.message);
            } finally {
                setLoading(false);
            }
        };
        getSpecificChannel();
    }, [dispatch, channelId]);

    const { subscriberCount } = channelDetails?.statistics ?? "0";
    const likeCount = filteredVideo?.id && filteredVideo.statistics ? filteredVideo.statistics.likeCount : "0";

    const handleSubscribe = () => {
        setSubscribe(!subscribe)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addMessage({
                name: "Livechat Tester ✅🆕",
                message: liveMessage,
            })
        );
        setLiveMessage("");
    }

    return (
        <>
            {loading ? (
                <WatchShimmer />
            ) : (        
                <div className="w-full flex lg:gap-7 flex-wrap px-2 md:px-8 my-2 justify-center lg:justify-normal lg:flex-nowrap">
                    <div className="w-full lg:max-w-[56rem]">
                        {filteredVideo ? (
                            <iframe
                                className="rounded-xl h-64 sm:h-80 md:h-[450px] w-full lg:max-w-[56rem]"
                                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <p>Video not available.</p>
                        )}
                        <div className="md:max-w-[56rem] w-full mb-4">
                            <h1 className="font-bold my-3  text-xl md:text-2xl">{title}</h1>
                            {/* left and right section of channel details and buttons */}
                            <div className="my-3 mb-5 flex items-center justify-between gap-5 flex-wrap xl:flex-nowrap">
                                {/* name content and subscribe button */}
                                <div className="flex items-center gap-10 justify-between">
                                    {/* image and title text */}
                                    <div className="flex items-center gap-5">
                                        <div>
                                            <img src="/src/assets/user.png" className="w-8 md:w-10" alt="User icon" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <h3 className="font-semibold text-base md:text-lg">
                                                    {channelDetails?.snippet?.title}
                                                </h3>
                                                <img src="/src/assets/tick.png" className="w-4 h-4" alt="tick" />
                                            </div>
                                            <h5 className="text-[#606060]">
                                                {subscriberCount ? subscriberCount : 0} subscribers
                                            </h5>
                                        </div>
                                    </div>
                                    {/* subscribe button */}
                                    <div>
                                        <button
                                            type="button"
                                            className={`font-medium text-sm md:text-base px-4 py-2 rounded-full ${
                                                subscribe
                                                    ? "bg-[#f1f1f1] hover:bg-[#e4e2e2]/90 text-black"
                                                    : "bg-[#0f0f0f] hover:bg-[#0f0f0f]/90 text-white"
                                            }`}
                                            onClick={() => handleSubscribe()}
                                        >
                                            {subscribe ? "Subscribed" : "Subscribe"}
                                        </button>
                                    </div>
                                </div>
                                {/* like and right side buttons */}
                                <div className="flex items-center gap-2">
                                    <button className="bg-[#f1f1f1] hover:bg-[#e4e2e2]/90 font-medium text-sm md:text-base px-2 sm:px-4 py-1 md:py-2 text-center inline-flex items-center rounded-full">
                                        <img
                                            className="w-6 md:w-7 me-1 md:me-2"
                                            src="/src/assets/like.png"
                                            alt="like button"
                                        />
                                        {likeCount.slice(0, 2)}K
                                    </button>
                                    <button className="bg-[#f1f1f1] hover:bg-[#e4e2e2]/90 text-sm md:text-base font-medium px-2 sm:px-4 py-1 md:py-2 text-center inline-flex items-center rounded-full">
                                        <img
                                            className="w-6 md:w-7 me-1 md:me-2"
                                            src="/src/assets/share.png"
                                            alt="like button"
                                        />
                                        Share
                                    </button>
                                    <button className="bg-[#f1f1f1] hover:bg-[#e4e2e2]/90 text-sm md:text-base font-medium px-2 sm:px-4 py-1 md:py-2 text-center inline-flex items-center rounded-full">
                                        <img
                                            className="w-6 md:w-7 me-1 md:me-2"
                                            src="/src/assets/download.png"
                                            alt="like button"
                                        />
                                        Download
                                    </button>
                                    <button className="bg-[#f1f1f1] hover:bg-[#e4e2e2]/90 text-base font-medium px-2 md:px-3.5 py-1 md:py-2 text-center inline-flex items-center rounded-full md:text-2xl tracking-wider">
                                        ...
                                    </button>
                                </div>
                            </div>
                            <p className="bg-[#f1f1f1] p-4 rounded-lg text-sm md:text-base max-w-full">{description}</p>
                        </div>
                        <div className="w-full md:px-2">
                            <CommentsContainer />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 border-2 h-fit rounded-xl lg:my-0 lg:mx-2">
                        <h4 className="text-[1.125rem] md:text-xl mb-2 border-b px-3 md:px-6 py-3">Live chat</h4>
                        <div className="h-[300px] sm:h-[480px] overflow-y-scroll overflow-x-hidden">
                            <LiveChat />
                        </div>
                        <form
                            className="flex items-center gap-2 md:gap-3 border-t px-2 md:px-6 py-2"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <img src="/src/assets/comment-user2.png" className="w-7 md:w-8" alt="User icon" />
                            <input
                                type="text"
                                className="w-full bg-[#f1f1f1] border-none rounded-full px-3 py-1.5 focus:outline-none"
                                value={liveMessage}
                                onChange={(e) => setLiveMessage(e.target.value)}
                                required
                            />
                            <button type="submit" className="p-2 hover:bg-[#f1f1f1] rounded-full">
                                <img className="w-6 md:w-7" src="/src/assets/send.png" alt="send" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default WatchPage