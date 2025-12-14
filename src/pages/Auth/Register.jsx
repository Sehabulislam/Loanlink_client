import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

const Register = () => {
  const { registerUser, signInWithGoogle, setUser, updateUserProfile } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (data) => {
    const profileImg = data.photo[0];
    console.log(data);

    registerUser(data.email, data.password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
            role: data.role,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in data base");
            }
          });
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };
          updateUserProfile(userProfile)
            .then(() => {
              setUser({
                ...result.user,
                userProfile,
              });
              toast.success("Your Account Created Successfully.");
              navigate(location.state?.from || "/");
            })
            .catch((error) => {
              toast.error(error.message);
              console.log(error);
            });
        });
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || "/");
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };
        axiosSecure
          .post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Google sign up successfully!");
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex w-10/12 lg:w-11/12 mx-auto">
      <title>Loanlink | Register</title>
      <div className="full md:max-w-lg mx-auto space-y-5 py-5 lg:py-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Create an Account</h1>
          <h1 className="text-2xl font-bold">
            Register with Loan<span className="text-red-500">Link</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full input md:input-lg mt-1 "
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full input md:input-lg mt-1 "
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>
          <div className="">
            <label>Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-neutral w-full input-lg"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}
          </div>
          <div>
            <label>Role</label>
            <select
              defaultValue=""
              {...register("role",{ required: true })}
              className="select w-full select-lg"
            >
              <option value="" disabled>
                Select Your Role
              </option>
              <option>borrower</option>
              <option>manager</option>
            </select>
            {errors.role?.type === "required" && (
              <p className="text-red-500">Role is required</p>
            )}
          </div>
          <div className="relative">
            <label>Password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Your Password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|:;"'<>,./?]).{6,}$/,
              })}
              className="w-full input md:input-lg md:text-xl mt-1 "
            />
            {errors.password?.type === "required" && (
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
                number, 1 special character and be minimum 6 characters long.
              </p>
            )}
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute bottom-4 right-4"
            >
              {showPass ? <FaEyeLowVision size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            Remember me
          </label>
          <button
            type="submit"
            className="btn w-full text-lg bg-red-500 text-white"
          >
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
          onClick={handleGoogleSignIn}
          className="btn bg-gray-100 border-none text-lg text-black border-[#e5e5e5] w-full p-5"
        >
          <FcGoogle size={28} />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
