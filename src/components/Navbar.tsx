import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsBell, BsCameraVideo, BsYoutube } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiMicrophone } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)
    const handleSearch = () => {
        if (location.pathname !== "/search") navigate("search");
        else {
            dispatch(clearVideos());
            dispatch(getSearchPageVideos(false));
        }
    };

    const { toggleSidebar } = useSidebar();

    return (

        <div className="flex justify-between items-center px-4 md:px-8 h-14 bg-[#212121] opacity-95 sticky top-0 z-50 text-white">
            {/* Left part (Menu and Logo) */}
            <div className="flex items-center gap-4 md:gap-5 text-xl">
                {/* Responsive padding and cursor pointer */}
                <div className="rounded-full p-2 md:p-3 hover:cursor-pointer hover:bg-gray-800"
                    onClick={toggleSidebar}
                >
                    <RxHamburgerMenu className="text-white" />
                </div>
                <Link to="/" >
                    <div className="flex gap-1 items-center justify-center pr-4">
                        <BsYoutube className="text-2xl md:text-3xl text-red-600" />
                        <span className="stretched-text text-sm md:text-base  font-medium pb-1 tracking-tighter">
                            YouTube
                        </span>
                    </div>
                </Link>
            </div>
            {/* Center part (Search bar)  */}
            <div className="flex items-center justify-center gap-5">
                <div className="flex">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearch();
                        }}
                        className="flex items-center"

                    >
                        {/* Search input container with responsive width */}
                        <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-l-full border-b border-t border-l border-r border-gray-700 focus-within:border-blue-600 ">
                            <div className="flex gap-4 items-center pr-5 ">
                                <div className=" hidden md:flex items-center pr-2">
                                    <AiOutlineSearch className="text-xl" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className=" w-10 sm:w-28 md:w-96 bg-zinc-900 focus:outline-none border-none text-sm md:text-base "
                                    value={searchTerm}
                                    onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                                />
                                <AiOutlineClose className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`}
                                    onClick={() => dispatch(clearSearchTerm())}


                                />
                            </div>

                        </div>
                        <button className="h-10 w-16 flex justify-center items-center bg-zinc-800 rounded-e-full border-t border-b border-r  border-gray-700">
                            <AiOutlineSearch className="text-xl" />
                        </button>
                    </form>
                </div>
                {/* Microphone icon */}
                <div className="text-xl bg-zinc-900 p-2 md:p-3 rounded-full">
                    <TiMicrophone />
                </div>
            </div>
            {/* Right part (Icons) */}
            <div className="flex items-center gap-4 md:gap-5 text-xl">
                {/* Camera icon hidden on smaller screens */}
                <BsCameraVideo className="hidden md:block" />
                <div className="relative">
                    <BsBell className="hidden md:block" />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 hidden md:block">
                        9+
                    </span>
                </div>
                {/* Profile picture with responsive size */}
                <img
                    src="/images/alphabet-text-symbol-flat-icon-e-letter-with-long-shadow-sign-template-free-vector.jpg"
                    alt="logo"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full"
                />
            </div>
        </div>


    )
}
