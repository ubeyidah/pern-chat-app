import { Link } from "react-router-dom";
import { z } from "zod";
import { signUpSchema } from "../utils/validation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../components/FormError";
import useAuthentication from "../hooks/useAuthentication";

const SignUp = () => {
  type signupSchemaType = z.infer<typeof signUpSchema>;
  const { signUp, loading } = useAuthentication();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signupSchemaType>({ resolver: zodResolver(signUpSchema) });

  const onSubmit: SubmitHandler<signupSchemaType> = async (data) => {
    await signUp(data);
  };

  return (
    <section className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
      <div className="flex items-center justify-center h-screen">
        <form
          className="p-8 w-full max-w-md flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h1 className="text-center text-xl mb-1">Welcome to ChatP</h1>
            <p className="text-center mb-3">
              Sign up now and join the ChatP community
            </p>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full input-accent"
              {...register("username")}
            />
            <FormError error={errors.username} />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="input input-bordered w-full input-accent"
              {...register("email")}
            />
            <FormError error={errors.email} />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full input-accent"
              {...register("password")}
            />
            <FormError error={errors.password} />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full input-accent"
              {...register("confirmPassword")}
            />
            <FormError error={errors.confirmPassword} />
          </label>

          <div className="flex items-center gap-5 my-2">
            <label className="label cursor-pointer flex items-center gap-2">
              <span className="label-text">Male</span>
              <input
                type="radio"
                className="radio radio-accent"
                {...register("gender")}
                value="male"
              />
            </label>
            <label className="label cursor-pointer flex items-center gap-2">
              <span className="label-text">Female</span>
              <input
                type="radio"
                className="radio radio-accent"
                {...register("gender")}
                value="female"
              />
              <FormError error={errors.gender} />
            </label>
          </div>

          <button
            className="btn btn-accent mt-8"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submiting.." : " Sign Up"}
          </button>
          <div>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
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
export default SignUp;
