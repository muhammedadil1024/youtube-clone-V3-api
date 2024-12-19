import FilterButtons from "./FilterButtons"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="px-4">
        <FilterButtons />
        {/* All Videos, Video Thumbnails */}
        <VideoContainer />
    </div>
  )
}

export default MainContainer