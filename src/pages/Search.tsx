import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import { SidebarProvider } from '../contexts/SidebarContext';
import { clearVideos } from '../store';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

export default function Search() {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        dispatch(clearVideos());
    }, [dispatch])

    useEffect(() => {
        dispatch(getSearchPageVideos(false))
        // console.log(videos)
        // console.log(videos.length)
    },
        [dispatch])

    return (
        <div className="max-h-screen overflow-hidden">
            <SidebarProvider>

                <div style={{ height: "7.5vh" }}>
                    <Navbar />
                </div>
                <div className="flex" style={{ height: "92.5vh" }}>
                    <div className=" bg-gray-800">
                        <Sidebar />
                    </div>
                    <div className="flex flex-col w-full py-8 pl-8 ">
                        {videos && videos.length ? (
                            <InfiniteScroll
                                dataLength={videos.length}
                                next={() => dispatch(getSearchPageVideos(true))}
                                hasMore={videos.length < 500}
                                loader={<Spinner />}
                                height={650}

                            >
                                {videos.map((item: HomePageVideos, index) => {
                                    return (
                                        <div className="my-8">
                                            <SearchCard data={item} key={`${item.videoId}-${index}`} />
                                        </div>
                                    );
                                })}

                            </InfiniteScroll>) : (<Spinner />)}
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}
