import useWindowDimensions from "../../utils/useWindowDimensions";
import Head from "../Head";
import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"

const Body = () => {
    // using this hook for responsiveness
    const { width } = useWindowDimensions();
    const widthMd = width > 768;

    return (
        <div>
            {/* Header */}
            <Head />
            <div className={`w-full ${widthMd ? "grid grid-flow-col" : "flex flex-col"} md:px-3`}>
                <Sidebar />
                <Outlet />
            </div>
            {/* footer */}
            <footer className="text-center">
                <div className="">
                    All icons by -
                    <a className="text-blue-600 font-medium" target="_blank" href="https://icons8.com">
                        Icons8
                    </a>
                </div>
                <div className="font-xl font-bold">
                    &copy; {new Date().getFullYear()} Muhammed Adil
                </div>
            </footer>
        </div>
    );
}

export default Body