import { useEffect, useState } from "react";
import { useConversation } from "../../store/ConversationStore";
import { toast } from "sonner";
import Message from "./Message";

const MessageBody = () => {
  const { messages, setMessages, selectedConversation, clearMessage } =
    useConversation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadMessage = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/message/${selectedConversation?.id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "An error occurred");
        setMessages(data.data.messages);
      } catch (error) {
        toast.error("Somthing went wrong");
        clearMessage();
      } finally {
        setLoading(false);
      }
    };
    loadMessage();
  }, [selectedConversation]);
  if (loading) {
    return <div className="flex-1">Loading.....</div>;
  }
  console.log(messages);

  return (
    <section className="flex-1">
      <div>
        {messages?.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
    </section>
  );
};
export default MessageBody;
