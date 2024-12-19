import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { closeMenu } from "../../utils/redux/appSlice";
import { useEffect } from "react";

const Sidebar = () => {
    // subscribing to specific store, to show menu sidebar links
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const dispatch = useDispatch();

    // using this hook for responsiveness
    const { width } = useWindowDimensions();
    const widthMd = width > 768;

    // Close the menu if screen width is below 768
    useEffect(() => {
        if (!widthMd) {
            dispatch(closeMenu());
        }
    }, [widthMd, dispatch]);

    const handleClose = () => {
        dispatch(closeMenu());
    };

    if (!isMenuOpen) return null;

    return (
        <div>
            {/* this will show if screen is larger, this appear like a normal sidebar */}
            {widthMd ? (
                <div className="p-2 min-w-56">
                    <div>
                        <Link to={"/"}>
                            <div className="flex items-center gap-5 hover:bg-gray-100 px-1 rounded-lg">
                                <img src="/src/assets/home-32.png" className="w-6" alt="home" />
                                <h2 className="text-[1.2rem]  py-1">Home </h2>
                            </div>
                        </Link>
                        <div className="flex items-center gap-5 hover:bg-gray-100 px-1 rounded-lg">
                            <img src="/src/assets/shorts.png" className="w-6" alt="shorts" />
                            <h2 className="text-[1.2rem]  py-1 cursor-pointer">Shorts</h2>
                        </div>
                        <div className="flex items-center gap-5 hover:bg-gray-100 px-1 rounded-lg">
                            <img src="/src/assets/subscription.png" className="w-6" alt="subscription" />
                            <h2 className="text-[1.2rem] py-1 mb-2 cursor-pointer">Subscriptions</h2>
                        </div>
                    </div>
                    <hr className="border-t-2 m-2" />
                    <div>
                        <h2 className="text-[1.2rem]  py-2 font-bold">You </h2>
                        <ul>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">History</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Playlists</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Watch later</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Liked videos</li>
                        </ul>
                    </div>
                    <hr className="border-t-2 m-2" />
                    <div>
                        <h2 className="text-[1.2rem]  py-2 font-bold">Subscriptions </h2>
                        <ul>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Music</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Gaming</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Sports</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">News</li>
                        </ul>
                    </div>
                    <hr className="border-t-2 m-2" />
                    <div>
                        <h2 className="text-[1.2rem]  py-2 font-bold">Explore </h2>
                        <ul>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Trending</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Shopping</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Movies</li>
                            <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Live</li>
                        </ul>
                    </div>
                </div>
            ) : (
                // this will appear when screen below 768px, this will be a drawer sidebar with background opacity 0.5
                <>
                    {/* Backdrop Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={handleClose}
                        aria-hidden="true"
                    ></div>

                    {/* Sidebar Drawer */}
                    <div className="fixed top-0 left-0 h-full w-2/3 bg-white z-50 p-4 overflow-x-hidden overflow-y-auto shadow-lg">
                        <div className="min-w-56">
                            <div>
                                <Link to={"/"} onClick={handleClose}>
                                    <div className="flex items-center gap-5 hover:bg-gray-100 px-1 rounded-lg">
                                        <img src="/src/assets/home-32.png" className="w-5" alt="home" />
                                        <h2 className="text-[1.1rem] py-1">Home</h2>
                                    </div>
                                </Link>
                                <div className="flex items-center gap-5 hover:bg-gray-100 px-1 rounded-lg">
                                    <img
                                        src="/src/assets/shorts.png"
                                        className="w-5"
                                        alt="shorts"
                                    />
                                    <h2 className="text-[1.1rem]  py-1 cursor-pointer">Shorts</h2>
                                </div>
                                <div className="flex items-center gap-5 hover:bg-gray-100 px-1 rounded-lg">
                                    <img src="/src/assets/subscription.png" className="w-5" alt="subscription" />
                                    <h2 className="text-[1.1rem] py-1 mb-2 cursor-pointer">Subscriptions</h2>
                                </div>
                            </div>
                            <hr className="border-t-2 m-2" />
                            <div>
                                <h2 className="text-[1.1rem] py-2 font-bold">You</h2>
                                <ul>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">History</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Playlists</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Watch later</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Liked videos</li>
                                </ul>
                            </div>
                            <hr className="border-t-2 m-2" />
                            <div>
                                <h2 className="text-[1.1rem] py-2 font-bold">Subscriptions</h2>
                                <ul>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Music</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Gaming</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Sports</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">News</li>
                                </ul>
                            </div>
                            <hr className="border-t-2 m-2" />
                            <div>
                                <h2 className="text-[1.1rem] py-2 font-bold">Explore</h2>
                                <ul>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Trending</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Shopping</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Movies</li>
                                    <li className="py-1 cursor-pointer hover:bg-gray-100 px-1 rounded-lg">Live</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Sidebar;