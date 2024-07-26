import {User} from "lucide-react"
const LoginButton = () => {
    return(
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-4 py-2 rounded-[6px] flex items-center gap-x-4 relative group transition duration-200 text-white bg-transparent">
                <h1 className="text-semibold">Login</h1>
                <User/>
            </div>
        </button>
    );
}
export default LoginButton;

