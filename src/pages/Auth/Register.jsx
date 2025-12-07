import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  const { register, errors } = useForm();
  const handleSubmit = () => {
    console.log("jfvdkanjkdf");
  };
  return (
    <div className="flex w-10/12 lg:w-11/12 mx-auto">
      <div className="full lg:max-w-4xl mx-auto space-y-5 lg:py-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Create an Account</h1>
          <h1 className="text-2xl font-bold">
            Register with Loan<span className="text-red-500">Link</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit("handleLogin")} className="space-y-4">
           <div>
                <label>Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full input md:input-lg mt-1 "
                />
                {/* {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )} */}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="w-full input md:input-lg mt-1 "
                />
                {/* {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )} */}
              </div>
              <div className="">
                <label>Photo</label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input file-input-neutral w-full input-lg"
                />
                {/* {errors.photo?.type === "required" && (
                  <p className="text-red-500">Photo is required</p>
                )} */}
              </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Your Password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|:;"'<>,./?]).{6,}$/,
              })}
              className="w-full input md:input-lg md:text-xl mt-1 "
            />
            {/* {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 6 characters or longer.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must contain at least 1 uppercase, 1 lowercase, 1
                    number, 1 special character and be minimum 6 characters
                    long.
                  </p>
                )} */}
          </div>
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            Remember me
          </label>
          <button className="btn w-full text-lg bg-red-500 text-white">
            Register
          </button>
        </form>
        <h1>
          Already have an account?{" "}
          <Link
            state={location.state}
            to={"/login"}
            className="text-red-500  hover:underline"
          >
            Login
          </Link>
        </h1>
        <div className="divider">OR</div>
        <button
          onClick={"handleGoogleSignIn"}
          className="btn bg-gray-100 border-none text-lg text-black border-[#e5e5e5] w-full p-5"
        >
          <FcGoogle size={28} />
          Register with Google
        </button>
      </div>

      {/* img
        <div className="">
          <img src={loginImg} alt="image" className="w-200 lg:mt-30" />
        </div> */}
    </div>
  );
};

export default Register;
