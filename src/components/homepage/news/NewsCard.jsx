import Image from "next/image";

const NewsCard = ({ news }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    {/* Author Details */}
                    <div>
                        <div>
                            <Image
                                src={news.author?.img}
                                alt={news.author?.name}
                                height={40}
                                width={40}
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
            </div>
        </div>
    );
};

export default NewsCard;