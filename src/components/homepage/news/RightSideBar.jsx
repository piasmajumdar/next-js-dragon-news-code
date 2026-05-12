"use client"
import { authClient } from "@/lib/auth-client";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const RightSideBar = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div>
            <div>
                <h2 className="font-bold text-lg mb-4">Login with</h2>
                <div className="flex flex-col gap-2">
                    <button
                        className="btn border-blue-500 text-blue-500"
                        onClick={handleGoogleSignin}
                    >
                        <FaGoogle /> Login with google
                    </button>
                    <button className="btn border-gray-900"><FaGithub /> Login with gitHub</button>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-lg mb-4">Find Us On</h2>
                <div className="border border-gray-600 rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr className="border border-gray-600">
                                <td className="p-2 flex gap-2 items-center"><FaFacebook /> Facebook</td>
                            </tr>
                            <tr className="border border-gray-600">
                                <td className="p-2 flex gap-2 items-center"><FaTwitter /> Twitter</td>
                            </tr>
                            <tr className="border border-gray-600">
                                <td className="p-2 flex gap-2 items-center"><FaInstagram /> Instagram</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;