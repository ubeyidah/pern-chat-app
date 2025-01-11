const MessageInput = () => {
  return (
    <form className="bg-slate-700/30 p-4">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full py-2.5  bg-gray-700 border-gray-600 text-white input px-3"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center btn btn-ghost !py-2"
        >
          {0 ? (
            <span className="loading loading-spinner" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
