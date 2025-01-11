import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
      <div className="flex items-center justify-center h-screen">
        <form className="p-8 w-full max-w-md flex flex-col">
          <div>
            <h1 className="text-center text-xl mb-1">Welcome Back to ChatP</h1>
            <p className="text-center mb-3">Stay connected with your world.</p>
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="input input-bordered w-full input-accent"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full input-accent"
            />
          </label>
          <button className="btn btn-primary mt-8" type="submit">
            Sign In
          </button>
          <div>
            <p className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};
export default SignIn;
