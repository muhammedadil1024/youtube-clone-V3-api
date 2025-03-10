import tick from "../../../assets/tick.png";
import user from "../../../assets/user.png";

// displaying each search result video
const SearchVideoCard = ({ info }) => {
    const { channelTitle, title, thumbnails, publishedAt, description } = info.snippet;
    const isPlaylist = !!info.id.playlistId;
    const isChannel = info.id.kind === "youtube#channel";

    return (
        <div className="flex flex-wrap w-full mb-4 md:gap-4">
            {/* if its a youtube channel, the thumbnail style will change */}
            {isChannel ? (
                <div className="flex items-center justify-evenly">
                    <div className="">
                        <img
                            src={thumbnails?.high?.url}
                            alt="Channel thumbnail or video thumbnail"
                            className="w-32 rounded-full"
                        />
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <h2 className="py-2 font-semibold px-1 overflow-clip text-xl">{title}</h2>
                            <img src={tick} className="w-4 h-4" alt="tick" />
                        </div>
                        <h5 className="px-1 text-[#606060] font-medium">Joined {publishedAt.slice(0, 10)}</h5>
                        <p className="px-1 text-[#606060] hidden sm:block">{description}</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative">
                        <img
                            src={thumbnails?.high?.url}
                            alt="Channel thumbnail or video thumbnail"
                            className="rounded-lg"
                        />
                        {/* if the video is a playilist it will show a tag that says its a playist. */}
                        {isPlaylist && (
                            <span className="playlist-flag absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                                Playlist
                            </span>
                        )}
                    </div>
                    <div className="">
                        <h2 className="py-2 font-semibold px-1 overflow-clip">{title}</h2>
                        <div className="flex items-center">
                            <img className="w-7" src={user} alt="User" />
                            <h5 className="pl-2 px-1 py-2 text-[#606060] font-medium">{channelTitle}</h5>
                            <img src={tick} className="w-4 h-4" alt="tick" />
                        </div>
                        <h5 className="px-1 py-1 text-[#606060] font-medium">Date Published {publishedAt.slice(0, 10)}</h5>
                        <p className="px-1 py-1 text-[#606060] hidden sm:block">{description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchVideoCard;
