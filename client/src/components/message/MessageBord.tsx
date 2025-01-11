import { useConversation } from "../../store/ConversationStore";
import MessageBody from "./MessageBody";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import NotSelectedConv from "./NotSelectedConv";

const MessageBord = () => {
  const { selectedConversation } = useConversation();
  return (
    <main className="flex flex-col">
      {selectedConversation ? (
        <>
          <MessageHeader />
          <MessageBody />
          <MessageInput />
        </>
      ) : (
        <NotSelectedConv />
      )}
    </main>
  );
};
export default MessageBord;
