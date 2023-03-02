import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import desktopMockup from "../assets/images/desktop-mockup.png";
import mobileMockup from "../assets/images/mobile-mockup.png";

import { Mockup } from "../components";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-[50%]">
          <Mockup />
        </div>

        <div className="flex-1 md:w-[50%] md:h-[100vh] mb-10 md:mb-0">
          <div className="w-full px-[1rem] md:px-[7rem] pt-7">
            <div className="w-full text-right">
              <Link to="/signup">
                <span className="text-[#093549] text-sm md:text-md font-bold">
                  Create an account
                </span>
              </Link>
            </div>

            <div className="w-full  flex flex-col gap-5 md:gap-8">
              <div>
                <h2 className="text-[25px] md:text-[32px] font-sans font-medium dark-blue">
                  Reset your password
                </h2>
                <p className="text-sm md:text-[16px] text-[#093549]">
                  Please enter the email address associated with your account.
                  We will send you an email with instructions on how to recover
                  your password.
                </p>
              </div>
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
                  className="border-[1px] px-2 py-1 rounded-md w-full placeholder:text-[13px] md:placeholder:text-[16px]"
                />
              </div>

              <div className="w-full">
                <button className="bg-[#1c9fda] w-full p-2 rounded-md text-white text-sm md:text-md cursor-pointer">
                  Continue
                </button>
              </div>

              <div className="text-center">
                <Link to="/login">
                  <span className="text-sm font-medium text-[#1c9fda]">
                    Return to Log In
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
