import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import { SidebarProvider } from '../contexts/SidebarContext';
import { clearVideos } from '../store';

export default function Home() {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        dispatch(clearVideos());
    }, [dispatch])

    useEffect(() => {
        dispatch(getHomePageVideos(false))
        console.log(videos)
        console.log(videos.length)
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
                    <div className="flex-1 ">
                        {videos && videos.length ? (
                            <InfiniteScroll
                                dataLength={videos.length}
                                next={() => dispatch(getHomePageVideos(true))}
                                hasMore={videos.length < 500}
                                loader={<Spinner />}
                                height={650}

                            >
                                {/* <div className="flex flex-wrap gap-y-16 gap-x-8 grid-cols-4 p-8"> */}
                                <div className="grid gap-8 p-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
                                    {videos.map((item: HomePageVideos, index) => {
                                        return <Card data={item} key={`${item.videoId}-${index}`} />;
                                    })}
                                </div>
                            </InfiniteScroll>) : (<Spinner />)}
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}
