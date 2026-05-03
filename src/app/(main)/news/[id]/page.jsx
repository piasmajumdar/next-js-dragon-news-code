
const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            <h2>News Details Page</h2>
        </div>
    );
};

export default NewsDetailsPage;