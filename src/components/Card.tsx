import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

export default function Card({ data }: { data: HomePageVideos }) {
    return (
        <div className='card-width flex flex-col gap-3 overflow-hidden '>
            <div className="relative">
                <span className="absolute bottom-3 right-3 text-sm  bg-gray-900 text-white px-2 py-0.5 z-10">
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img
                        className="w-full object-cover rounded-t-2xl rounded-b-2xl hover:rounded-none"
                        src={data.videoThumbnail}
                        alt="thumbnail"
                    />
                </Link>
            </div>
            <div className="flex gap-2">
                <div className="min-w-fit">

                    <a href="#">
                        <img src={data.channelInfo.image} alt="channel"
                            className='h-9 w-9 rounded-full' />
                    </a>
                </div>
                <div>
                    <h3 >
                        <a href={`/watch${data.videoLink}`} className='line-clamp-2'></a>
                        {data.videoTitle}
                    </h3>
                    <div className="text-sm text-gray-400">
                        <div>
                            <a href="#" className="hover:text-white">
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
