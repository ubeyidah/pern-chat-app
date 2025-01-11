import Profile from "./Profile";

const Sidebar = () => {
  return (
    <aside className="border-r sticky top-0 left-0 h-screen border-slate-600 bg-slate-600/30">
      <div className="flex items-center justify-between gap-1 border-b border-slate-700 p-2">
        <Profile />
        <label className="input input-bordered flex items-center gap-2 rounded-full">
          <input type="text" className="w-full py-2" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </aside>
  );
};
export default Sidebar;
