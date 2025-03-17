import { LogOut, Menu, MessageSquare, Settings, User } from "lucide-react"

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-12 py-6 btn btn-primary fixed">
            <div className="flex">
                <span className="font-mono font-extrabold text-lg mr-3 justify-center items-center">CharchaCafe</span>
                <MessageSquare className="size-6" />
            </div>
                <Menu className="hidden md:flex" />
            <div className="hidden lg:flex w-60 justify-around">
                <div className="flex items-center justify-center">
                    <Settings size={18}/> <span className="text-xs ml-1">Settings</span>
                </div>

                <div className="flex items-center justify-center">
                    <User size={18}/> <span className="text-xs ml-1">Profile</span>
                </div>

                <div className="flex items-center justify-center">
                    <LogOut size={18}/> <span className="text-xs ml-1">Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
