import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { useSidebar } from "../contexts/SidebarContext";

export default function Sidebar() {

    const { isOpen } = useSidebar();

    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl" />,
            name: "Home",
        },
        {
            icon: <FaRegCompass className="text-xl" />,
            name: "Explore",
        },
        {
            icon: <MdOutlineSlowMotionVideo className="text-xl" />,
            name: "Shorts",
        },
        {
            icon: <MdSubscriptions className="text-xl" />,
            name: "Subscriptions",
        },
    ];

    const secondaryLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl" />,
            name: "Sport",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <MdSettings className="text-xl" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl" />,
            name: "Report history",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl" />,
            name: "Send feedback",
        },
    ];

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How YouTube works",
            "Test new features",
        ],
    ];
    return (
        <div className={`sidebar ${isOpen ? "w-64" : "w-24"} transition-width duration-300 bg-[#212121] text-white h-full overflow-y-auto`}>

            <ul className="flex flex-col border-b-2 pt-4 ml-3 border-gray-700">
                {mainLinks.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={`pl-6 py-3 rounded-md hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-800" : ""
                                }`}
                        >
                            <a href="#" className="flex items-center gap-5">
                                {icon}
                                {isOpen && <span className="text-sm tracking-wider">{name}</span>}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {isOpen && <ul className="flex flex-col border-b-2 pt-4 ml-3 border-gray-700">
                {secondaryLinks.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={`pl-6 py-3 rounded-md hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-800" : ""
                                }`}
                        >
                            <a href="#" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>}
            {isOpen && <ul className="flex flex-col border-b-2 pt-4 ml-3 border-gray-700">
                {subscriptionLinks.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={`pl-6 py-3 rounded-md hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-800" : ""
                                }`}
                        >
                            <a href="#" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>}
            {isOpen && <ul className="flex flex-col border-b-2 pt-4 ml-3 border-gray-700">
                {helpLinks.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={`pl-6 py-3 rounded-md hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-800" : ""
                                }`}
                        >
                            <a href="#" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>}
            {isOpen && <ul className="flex gap-2  flex-wrap text-sm p-4 pb-2 text-zinc-400">
                {textLinks[0].map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>}
            {isOpen && <ul className="flex gap-2  flex-wrap text-sm p-4 text-zinc-400">
                {textLinks[1].map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>}

            {isOpen && <span className="px-4 text-sm text-zinc-400">&copy; 2024 Google</span>}
            {isOpen && <p className="px-4 pt-3 text-sm text-zinc-400">
                This clone for education
            </p>}
        </div>
    );
}
