import Link from "next/link";
const LoginButton = () => {
    return(
        <Link href="/MyJobs" className="p-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="px-4 py-2 flex items-center gap-x-4 relative group transition duration-200 text-white bg-transparent">
                    <h1 className="">Dashboard</h1>
                </div>
        </Link>
    );
}
export default LoginButton;

