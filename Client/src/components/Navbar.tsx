import { LogOut, MessageSquare, Settings, User } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"

const Navbar = () => {
    const { logout, authUser } = useAuthStore()

    return (
        <header className="w-full flex items-center justify-between px-12 py-6 backdrop-blur-lg bg-base-100/80 border-base-300 fixed">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
                    <h1 className="font-mono font-extrabold text-lg justify-center items-center">CharchaCafe</h1>
                    <MessageSquare className="size-6 text-primary" />
                </Link>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex justify-around">
                    <Link to="/settings" className="flex items-center justify-center">
                        <Settings className="size-5" /> <span className="hidden sm:inline text-xs">Settings</span>
                    </Link>
                    {
                        authUser && (
                            <>
                                <Link to="/profile" className="flex gap-2 ml-4 items-center justify-center">
                                    <User className="size-5" /> <span className="hidden sm:inline text-xs">Profile</span>
                                </Link>

                                <button className="flex gap-2 ml-4 items-center justify-center" onClick={logout}>
                                    <LogOut className="size-5" /> <span className="hidden sm:inline text-xs">Logout</span>
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar
