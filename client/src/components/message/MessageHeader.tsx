import { useConversation } from "../../store/ConversationStore";

const MessageHeader = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="w-full bg-slate-600/30 p-2 ">
      <h3 className="capitalize">{selectedConversation?.username}</h3>
      <p className="-mt-1">{selectedConversation?.email}</p>
    </div>
  );
};
export default MessageHeader;
