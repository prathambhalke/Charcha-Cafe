import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
const ChatHeader = () => {
  const { selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  
  return (
    <div className="p-2.5 border-b border-base-300">
        <div className="flex items-center gap-3">
          <div className="avatar">
              <div className="size-10 rounded-full relative">
                <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
              </div>
          </div>

          <div className="font-medium">
            <h3>{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">{onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}</p>
          </div>

        </div>
    </div>
  )
}

export default ChatHeader