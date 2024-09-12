import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { userActionsCreator } from "../store/actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { username: "", email: "", password: "" },
    mode: "all",
  });

  //const dispatch = useDispatch();
  //const history = useHistory();

  const formSubmit = (data) => {
    console.log(data);
    //dispatch(userActionsCreator(data));
    
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-bold text-4xl text-[#252B42]">Sign Up</h3>
        <p className="text-[#737373] text-base">
          Enter your details to create a new account
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col items-start w-[22rem] h-24">
          <label className="font-bold text-md text-[#252B42]">Username</label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username should be at least 3 characters",
              },
            })}
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div className="flex flex-col items-start w-[22rem] h-24">
          <label className="font-bold text-md text-[#252B42]">Email</label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col items-start w-[22rem] h-24">
          <label className="font-bold text-md text-[#252B42]">Password</label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
            })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex w-[22rem] h-20">
          <button
            className="font-bold text-md bg-[#252B42] text-white rounded-md w-full h-12"
            type="submit"
            disabled={!isValid}
          >
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-[#737373] text-base">
            Already have an account?{" "}
            <NavLink to="/login" className="text-[#252B42]">
              Login
            </NavLink>
          </p>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Signup;
