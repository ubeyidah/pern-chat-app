import { UserConvType } from "../../types/types";

const ConversationCard = ({ email, username, profile }: UserConvType) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer p-3 hover:bg-slate-500/30 transition-colors duration-200 py-4">
      <div className="avatar">
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
