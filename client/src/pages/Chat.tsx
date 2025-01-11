import MessageBord from "../components/message/MessageBord";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  return (
    <main className="grid grid-cols-[300px,1fr]">
      <Sidebar />
      <MessageBord />
    </main>
  );
};
export default Chat;
