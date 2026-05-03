import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* Author Details */}
                    <div className="flex justify-between items-center bg-slate-200 p-4">
                        <div>
                            <Image
                                src={news.author?.img}
                                alt={news.author?.name}
                                height={40}
                                width={40}
                                className="rounded-full"
                            />
                            <div>
                                <h2 className="font-semibold">{news.author?.name}</h2>
                                <h2 className="text-xs">{news.author?.published_date}</h2>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <CiShare2 className="text-xl"></CiShare2>
                            <CiBookmark className="text-xl"></CiBookmark>
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            height={300}
                            width={300}
                            className="w-full"
                        />
                    </figure>
                    <p className="line-clamp-3">{news.details}</p>
                
                    <div>
                        <div></div>
                        <Link href={`/news/${news._id}`}>
                        <button>See Details</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NewsCard;