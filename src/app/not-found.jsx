import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center gap-6">
            <h2 className="font-bold text-5xl text-purple-500">This page is not found</h2>
            <Link href={'/'}>
                <button className="btn bg-purple-500 text-white p-3 rounded-md">Go Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;