import { useAuth } from "../../store/AuthStore.js";
import { useConversation } from "../../store/ConversationStore.js";
import { MessageType } from "../../types/types.js";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ updatedAt, body, senderId }: MessageType) => {
  const { user } = useAuth();
  const { selectedConversation } = useConversation();

  const fromMe = senderId === user?.id;
  const img = fromMe ? user?.profile : selectedConversation?.profile;
  const chatClass = fromMe ? "chat-end" : "chat-start";

  const bubbleBg = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="hidden md:block chat-image avatar">
        <div className="w-6 md:w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={img} />
        </div>
      </div>
      <p className={`chat-bubble text-white ${bubbleBg} text-sm md:text-md`}>
        {body}
      </p>
      <span className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
        {extractTime(updatedAt.toString())}
      </span>
    </div>
  );
};
export default Message;
