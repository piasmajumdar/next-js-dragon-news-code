import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const news = await getNewsDetailsById(id);
    console.log(news)

    return (
        <div className="w-4xl mx-auto card bg-base-100 shadow-sm">
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
                <p className="">{news.details}</p>

                <div className="flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <h2 className="flex items-center gap-2"><IoIosStar className="text-lg text-yellow-500" /> {news.rating?.number}</h2>
                        <h2 className="flex items-center gap-2"><FaEye className="text-lg" /> {news.total_view}</h2>
                    </div>
                    <Link href={`/category/${news.category_id}`}>
                        <button className="btn">See other news for this category</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default NewsDetailsPage;