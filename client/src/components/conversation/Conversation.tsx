import { useEffect, useState } from "react";
import { UserConvType } from "../../types/types";
import { toast } from "sonner";
import ConversationCard from "./ConversationCard";

const Conversation = () => {
  const [users, setUsers] = useState<UserConvType[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadConversation = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/message/conversation");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error.message || "error occur");
        }
        setUsers(data.data.users);
      } catch (error) {
        toast.error("Somthing went wrong");
      } finally {
        setLoading(false);
      }
    };
    loadConversation();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="overflow-y-auto h-[calc(100%-73px)] pb-5">
      {users?.map((user) => (
        <ConversationCard key={user.id} {...user} />
      ))}
    </div>
  );
};
export default Conversation;
