import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/images/googleIcon.png";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="w-full px-[1rem] md:px-[7rem] pt-7">
        <div className="w-full text-right">
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-[24px] font-medium dark-blue">
            Let's get started
          </h2>
          <p className="text-xs md:text-md">
            Create an account and enjoy a seemless travel booking experience.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 md:gap-5 w-full mt-3">
              <div className=" w-[50%]">
                <label htmlFor="firstName" className="text-xs">
                  First Name
                </label>{" "}
                <br />
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="border-[2px] outline-none px-2 py-1 rounded-md w-full placeholder:text-[10px] md:placeholder:text-[16px]"
                />
              </div>

              <div className=" w-[50%]">
                <label htmlFor="lastName" className="text-xs">
                  Last Name
                </label>{" "}
                <br />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className="border-[2px] outline-none px-2 py-1 rounded-md w-full placeholder:text-[10px] md:placeholder:text-[16px]"
                />
              </div>
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
                className="border-[2px] px-2 py-1 outline-none rounded-md w-full  placeholder:text-[10px] md:placeholder:text-[16px]"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="text-xs">
                Phone Number
              </label>{" "}
              <br />
              <div className="flex border-[2px] rounded-md w-full">
                <select
                  name="countryCode"
                  id="countryCode"
                  className="bg-gray-100 text-xs md:text-sm p-2"
                >
                  <option value="+234">+234</option>
                </select>
                <div className=" px-2 py-1">
                  <input
                    name="phoneNumber"
                    type="type"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-xs">
                Password
              </label>{" "}
              <br />
              <div className="flex items-center justify-between border-[2px] px-2 py-1 rounded-md w-full">
                <input
                  name="password"
                  type="type"
                  placeholder="Password (min of 8 characters and a number)"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full outline-none  placeholder:text-[10px] md:placeholder:text-[16px]"
                />
                <p className="text-[#1c9fda] font-medium text-[10px] md:text-sm">
                  Show
                </p>
              </div>
            </div>

            <div className="flex">
              <input type="checkbox" />
              <p className="pl-2 text-xs md:text-sm">
                I have read and agree to Travelbay’s{" "}
                <span className="text-[#1c9fda] underline">
                  {" "}
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#1c9fda] underline">Privacy Policy</span>
              </p>
            </div>

            <div className="flex items-start">
              <input type="checkbox" />
              <p className="pl-2 text-xs md:text-sm">
                Join Travelbay travel community for exclusive access to travel
                resources and events to help you grow.
              </p>
            </div>

            <div className="w-full">
              <button className="bg-[#1c9fda] w-full p-2 rounded-md text-white text-sm md:text-md cursor-pointer">
                Create an account
              </button>
            </div>

            <div className="flex items-center gap-5">
              <hr className="border-[0.5px] w-full" />
              OR
              <hr className="border-[0.5px] w-full" />
            </div>

            <div>
              <button className="flex justify-center items-center w-full border-2 border-gray-200 p-2 rounded-md">
                <img src={googleIcon} alt="Google Icon" className="w-4" />
                <p className="text-sm ml-3">Contine with Google</p>
              </button>
            </div>

            <div className="w-full flex justify-center">
              <div className="bg-[#F6FBFE] md:w-[70%] rounded-lg text-xs p-3">
                <p className="text-center">
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

export default SignUpForm;
