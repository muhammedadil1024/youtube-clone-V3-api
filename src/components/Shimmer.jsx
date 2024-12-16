
const VideoShimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div className="shimmer-card" key={index}>
                        <div className="shimmer shimmer-img"></div>
                        <div className="shimmer shimmer-heading"></div>
                        <div className="shimmer shimmer-text"></div>
                        <div className="shimmer shimmer-text"></div>
                    </div>
                ))}
        </div>
    );
}

export default VideoShimmer;

export const WatchShimmer = () => {
    return (
        <div className="watch-shimmer-card flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-2/3 grow">
                <div className="shimmer search-shimmer-img h-60 md:h-[26rem]"></div>
                <div className="shimmer shimmer-heading my-4 w-4/5"></div>
                <div className="shimmer shimmer-text my-4 h-8"></div>
                <div className="shimmer shimmer-text my-4 w-full h-24"></div>
            </div>
            <div className="w-full md:w-1/3">
                <div className="shimmer shimmer-img h-60 md:h-[38.5rem]"></div>
            </div>
        </div>
    );
}

export const SearchShimmer = () => {
    return (
        <div>
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div className="search-shimmer-card flex-wrap md:flex-nowrap" key={index}>
                        <div className="w-full">
                            <div className="shimmer search-shimmer-img"></div>
                        </div>
                        <div className="w-full">
                            <div className="shimmer shimmer-heading mb-4 w-1/2"></div>
                            <div className="shimmer shimmer-text my-4"></div>
                            <div className="shimmer shimmer-text my-4"></div>
                            <div className="shimmer shimmer-text my-4 w-11/12"></div>
                        </div>
                    </div>
                ))}
        </div>
    );
};