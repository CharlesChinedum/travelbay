import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import desktopMockup from "../assets/images/desktop-mockup.png";
import mobileMockup from "../assets/images/mobile-mockup.png";

import { Mockup } from "../components";

const ResetPassword = () => {
  const [initialText, setInitialText] = useState(true);
  const [color, setColor] = useState(true);
  const [secondColor, setSecondColor] = useState(false);
  const [email, setEmail] = useState("");

  function handleFirstSlide() {
    setInitialText(true);
    setColor(true);
    setSecondColor(false);
  }

  function handleSecondSlide() {
    setInitialText(false);
    setColor(false);
    setSecondColor(true);
  }
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
                <span className="text-xs md:text-md">Create an account</span>
              </Link>
            </div>

            <div className="w-full  flex flex-col gap-5 md:gap-8">
              <div>
                <h2 className="text-lg md:text-[24px] font-medium dark-blue">
                  Reset your password
                </h2>
                <p className="text-xs md:text-md">
                  Please enter the email address associated with your account.
                  We will send you an email with instructions on how to recover
                  your password.
                </p>
              </div>
              <div>
                <label htmlFor="email" className="text-xs">
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
                  className="border-[2px] px-2 py-1 rounded-md w-full"
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
