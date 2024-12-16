
const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;

    return (
        <div className="w-80 mb-4 px-1">
            <img src={thumbnails?.medium?.url} alt="video thumbnails" className="rounded-lg" />
            <h2 className="py-2 font-semibold px-1 overflow-clip">{title}</h2>
            <div className="flex items-center">
                <h5 className="px-1 text-[#606060] font-medium">{channelTitle}</h5>
                <img src="/src/assets/tick.png" className="w-4 h-4" alt="tick" />
            </div>
            <h5 className="px-1 text-[#606060] font-medium">
                {statistics?.viewCount} views - {publishedAt.slice(0, 10)}
            </h5>
        </div>
    );
}

export default VideoCard