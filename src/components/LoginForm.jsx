import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/images/googleIcon.png";
import { useMutation, gql } from "@apollo/client";
import { LOGIN_MUTATION } from "../GraphQL/Mutations";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  const loginUser = async () => {
    await login({
      variables: {
        email: email,
        password: password,
      },
    });

    if (data) {
      // const token = data.login.token;
      console.log(data.login.token);
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full px-[1rem] md:px-[7rem] pt-7">
        <div className="w-full text-right">
          <Link to="/signup">
            <span className="text-[#093549] text-sm md:text-md font-bold">
              Create an account
            </span>
          </Link>
        </div>
        <div className="w-full">
          <h2 className="text-[32px] font-sans font-medium dark-blue">
            Welcome back
          </h2>
          <p className="text-sm md:text-[16px] text-[#093549]">
            Login your travelbay account
          </p>

          <div className="flex flex-col gap-5 md:gap-7">
            <div className="flex gap-5 w-full mt-3" />
            <div>
              <label
                htmlFor="email"
                className="text-[14px] text-[#093549] font-medium"
              >
                Email Address
              </label>{" "}
              <br />
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border-[2px] px-2 py-1 rounded-md w-full outline-none  placeholder:text-[13px] md:placeholder:text-[16px]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-[14px] text-[#093549] font-medium"
              >
                Password
              </label>{" "}
              <br />
              <div className="flex items-center justify-between border-[2px] px-2 py-1 rounded-md w-full">
                <input
                  name="password"
                  type="type"
                  placeholder="Password (min of 8 characters)"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full outline-none placeholder:text-[13px] md:placeholder:text-[16px]"
                />
                <p className="text-[#1c9fda] font-medium text-[10px] md:text-sm">
                  Show
                </p>
              </div>
            </div>

            <div className="w-full">
              <button
                className="bg-[#1c9fda] w-full p-2 rounded-md text-white text-sm md:text-md cursor-pointer"
                onClick={loginUser}
              >
                Log In
              </button>
            </div>

            <div className="w-full flex justify-center text-sm">
              <p className="text-center text-xs md:text-md">
                Forgot your password?{" "}
                <Link to="/resetpassword">
                  <span className="text-[#093549] font-medium underline">
                    Reset it here
                  </span>
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center">
              <div className="bg-[#F6FBFE] md:w-[70%] rounded-lg text-xs p-3">
                <p className="text-center text-[12px]">
                  Having problems creating an account?{" "}
                  <span className="text-[#093549] font-medium underline">
                    Chat with us
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
