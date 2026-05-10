import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsCategoryId } from "@/lib/data";


export default async function CategoryPage({ params }) {
    const { id } = await params;

    const categories = await getCategories();
    // console.log(categories.news_category);

    const news = await getNewsCategoryId(id);
    console.log(news);

    return (
        <div className="grid grid-cols-12 gap-2 w-11/12 mx-auto my-15">
            <LeftSideBar categories={categories} activeId={id}></LeftSideBar>

            <div className="col-span-6">
                <h2 className="font-bold text-lg">News By Category</h2>
                <div className="space-y-4 mt-6">
                    {
                        news.length == "0"
                            ? <div className="h-[20vh] flex items-center justify-center">No News Available !</div>
                            : news.map(n => {
                                return <NewsCard key={n._id} news={n}></NewsCard>
                            })
                    }
                </div>
            </div>

            <div className="col-span-3">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}
