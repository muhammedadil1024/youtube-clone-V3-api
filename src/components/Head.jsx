import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { cacheResults } from "../utils/redux/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "../utils/useWindowDimensions";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    // using this hook for responsiveness
    const { width } = useWindowDimensions();
    const widthMd = width > 768;

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        try {
            const timer = setTimeout(() => {
                const getSearchSuggestion = async () => {
                    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
                    if (!data.ok) {
                        throw new Error("Failed to load data, check your connection and try again");
                    }
                    const jsonData = await data.json();
                    setSuggestions(jsonData[1]);
                    // updating the search data in redux
                    dispatch(
                        cacheResults({
                            [searchQuery]: jsonData[1],
                        })
                    );
                };
                // if search query is same like same keyword then set the search suggestion to search cache in redux
                if (searchCache[searchQuery]) {
                    setSuggestions(searchCache[searchQuery]);
                    // if no search cache call the api and set or update (this is done by getSearchSuggestion function) the result to cache like an object searchQuery keyword: api response[1] data
                } else {
                    getSearchSuggestion();
                }
            }, 200);
            return () => {
                clearTimeout(timer);
            };
        } catch (e) {
            console.log(e.message);
            
        }
    }, [searchQuery, searchCache, dispatch]);

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        navigate(`/results?search_query=${suggestion}`);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible); // Toggle modal visibility
    };

    return (
        <div className="grid grid-flow-col gap-2 px-1 md:px-3 shadow-md md:shadow-none">
            <div className="flex items-center justify-self-start">
                <img
                    src="/src/assets/hamburger-menu.png"
                    onClick={() => toggleMenuHandler()}
                    className="w-9 h-9 cursor-pointer"
                    alt="Menu icon"
                />
                <Link to={"/"}>
                    <img src="/src/assets/youtube-logo.jpg" className="w-28" alt="Youtube logo" />
                </Link>
            </div>
            <div
                className={`${
                    widthMd ? "w-full flex justify-self-center mt-3 px-2" : "w-full flex justify-self-center px-2"
                }`}
            >
                <div className="w-full flex">
                    <input
                        type="search" //w-580 -normal
                        className={`${
                            widthMd
                                ? "w-full h-[2.6rem] border border-gray-400 p-1 px-4 rounded-l-full content-center"
                                : "hidden"
                        }`}
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                    />
                    <button
                        type="button"
                        className={`${
                            widthMd
                                ? "h-[2.6rem] border border-gray-400 p-1 rounded-r-full px-6 bg-gray-50 bg-transparent"
                                : "hover:bg-[#e9e9e9] px-6  rounded-full"
                        }`}
                        onClick={!widthMd ? toggleModal : undefined}
                        aria-controls="default-modal"
                        aria-expanded={isModalVisible}
                    >
                        <img src="/src/assets/search.png" className="w-4" alt="Search icon" />
                    </button>
                </div>
                {/* ------------------------------------------------ Modal - start ---------------------------------------------------- */}
                <div
                    onMouseDown={() => toggleModal()}
                    id="default-modal"
                    role="dialog"
                    aria-modal="true"
                    tabIndex="-1"
                    className={`${
                        isModalVisible ? "flex" : "hidden"
                    } fixed inset-0 z-10 overflow-y-auto  justify-center w-full h-full`}
                >
                    {isModalVisible && (
                        <div className="w-full">
                            <div className="p-3 w-full max-h-full">
                                {/* Modal content */}
                                <div className="bg-white rounded-lg shadow border-2 w-full">
                                    <div className="flex text-center justify-center gap-3 p-4 border-b w-full">
                                        <button
                                            type="button"
                                            className="hover:bg-[#e9e9e9] rounded-full text-sm w-9 h-8 ms-auto inline-flex justify-center items-center"
                                            onClick={toggleModal} // Close modal
                                        >
                                            <img src="/src/assets/left-arrow.png" className="w-6" alt="left arrow" />
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                        <input
                                            autoFocus
                                            type="search" //w-580 -normal
                                            className="w-full h-[2rem] bg-[#f1f1f1] p-1 px-4 rounded-full content-center outline-none"
                                            placeholder="Search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => setShowSuggestions(true)}
                                            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                                        />
                                    </div>
                                    {/* Modal body */}
            
                                        {!widthMd && showSuggestions && searchQuery.length !== 0 && (
                                            <div className="w-full px-2">
                                                <ul>
                                                    {suggestions?.map((suggestion) => (
                                                        <li
                                                            key={suggestion}
                                                            className="py-[0.37rem] px-2 font-medium italic hover:bg-gray-100 cursor-default"
                                                            onMouseDown={() => handleSuggestionClick(suggestion)}
                                                        >
                                                            {suggestion ? suggestion : undefined}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* ------------------------------------------------ Modal - End ---------------------------------------------------- */}
                {widthMd && showSuggestions && searchQuery.length !== 0 && (
                    <div
                        className={`${
                            widthMd ? "" : "hidden"
                        }fixed mt-12 px-4 py-2 bg-white w-[580px] shadow-md rounded-lg border border-gray-100`}
                    >
                        <ul>
                            {suggestions?.map((suggestion) => (
                                <li
                                    key={suggestion}
                                    className="py-[0.37rem] px-2 font-medium italic hover:bg-gray-100 cursor-default"
                                    onMouseDown={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion ? suggestion : undefined}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="justify-self-end content-center">
                <img src="/src/assets/comment-user2.png" className="w-7 md:w-8 mr-1 cursor-pointer" alt="User icon" />
            </div>
        </div>
    );
}

export default Head