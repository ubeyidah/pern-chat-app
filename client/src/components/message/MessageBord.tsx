import MessageBody from "./MessageBody";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";

const MessageBord = () => {
  return (
    <main className="flex flex-col">
      <MessageHeader />
      <MessageBody />
      <MessageInput />
    </main>
  );
};
export default MessageBord;
