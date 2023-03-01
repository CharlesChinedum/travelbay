import React, { useState } from "react";
import { Link } from "react-router-dom";

import Mockup from "./Mockup";

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <Mockup />
        </div>

        <div className="flex-1 md:w-[50%] h-[100vh] mb-10 md:mb-0">
          <div className="w-full px-[1rem] md:px-[7rem] pt-7">
            <div className="w-full text-right">
              <Link to="/signup">
                <span className="text-xs md:text-md">Create an account</span>
              </Link>
            </div>

            <div className="w-full flex flex-col gap-5 md:gap-8">
              <div>
                <h2 className="text-lg md:text-[24px] font-medium dark-blue">
                  Create a new password
                </h2>
                <p className="text-xs md:text-sm">
                  Enter a new password of your choice but please make sure it’s
                  known to you alone.
                </p>
              </div>
              <div>
                <label htmlFor="password" className="text-xs">
                  New Password
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
                    className="w-full placeholder:text-[10px] md:placeholder:text-[16px]"
                  />
                  <p className="text-[#1c9fda] font-medium text-[10px] md:text-sm">
                    Show
                  </p>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="text-xs">
                  Re-type new password
                </label>{" "}
                <br />
                <div className="flex items-center justify-between border-[2px] px-2 py-1 rounded-md w-full">
                  <input
                    name="password"
                    type="type"
                    placeholder="Password (min of 8 characters)"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className="w-full placeholder:text-[10px] md:placeholder:text-[16px]"
                  />
                  <p className="text-[#1c9fda] font-medium text-[10px] md:text-sm">
                    Show
                  </p>
                </div>
              </div>

              <div className="w-full">
                <button className="bg-[#1c9fda] w-full p-2 rounded-md text-white text-sm md:text-md cursor-pointer">
                  Confirm new password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
