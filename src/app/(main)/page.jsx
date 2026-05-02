import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
}

const getNewsCategoryId = async({category_id}) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data;
}


export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);

  const news = await getNewsCategoryId("04");
  console.log(news)

  return (
    <div className="grid grid-cols-12 gap-2 w-11/12 mx-auto my-15">
      <LeftSideBar categories={categories} activeId={null}></LeftSideBar>

      <div className="font-bold text-lg bg-purple-100 col-span-6">
        All News
      </div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
