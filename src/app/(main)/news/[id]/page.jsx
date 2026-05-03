import { getNewsDetailsById } from "@/lib/data";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const newsDetails = await getNewsDetailsById(id);
    console.log(newsDetails)

    return (
        <div>
            <h2>News Details Page</h2>
        </div>
    );
};

export default NewsDetailsPage;