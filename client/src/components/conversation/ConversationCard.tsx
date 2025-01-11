import { useConversation } from "../../store/ConversationStore";
import { UserConvType } from "../../types/types";

const ConversationCard = ({ id, email, username, profile }: UserConvType) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const setConversation = () => {
    setSelectedConversation({ id, email, username, profile });
  };
  return (
    <div
      className={`flex gap-4 items-center cursor-pointer p-3 hover:bg-slate-500/30 transition-colors duration-200 ${
        selectedConversation?.id == id ? "bg-slate-500/30" : ""
      }`}
      onClick={setConversation}
    >
      <div className="avatar online">
        <div className="size-10 rounded-full">
          <img src={profile} alt={username} />
        </div>
      </div>
      <div>
        <h3 className="capitalize">{username}</h3>
        <p className="-m-1">{email}</p>
      </div>
    </div>
  );
};
export default ConversationCard;
