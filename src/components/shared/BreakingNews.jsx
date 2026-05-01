import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        "_id": "1",
        "title": "Breaking News: New Policy Announced by the Government"
    },
    {
        "_id": "2",
        "title": "Breaking News: Stock Markets Surge Amid Global Optimism"
    },
    {
        "_id": "3",
        "title": "Major Earthquake Hits Coastal Region"
    },
    {
        "_id": "4",
        "title": "Breaking News: Tech Giant Releases New AI Product"
    },
    {
        "_id": "5",
        "title": "International Sports Event Begins Today"
    }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-2 w-11/12 mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>

            <Marquee pauseOnHover={true} speed={100}>
                <div className='space-x-10'>
                    {
                    news.map(n => {
                        return <span key={n._id}>{n.title}</span>
                    })
                }
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;