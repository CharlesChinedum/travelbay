import React, { useState } from "react";

import logo from "../assets/images/logo.png";
import desktopMockup from "../assets/images/desktop-mockup.png";
import mobileMockup from "../assets/images/mobile-mockup.png";
import arrowDown from "../assets/images/arrow-down.png";

import { LoginForm } from "../components";

const Mockup = () => {
  const [initialText, setInitialText] = useState(true);
  const [color, setColor] = useState(true);
  const [secondColor, setSecondColor] = useState(false);

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
      <div className="flex w-full">
        <div className="flex-1 w-full md:w-[50%] bg-[#F7F7F8] md:h-[100vh]">
          <div className="w-full px-[1rem] md:px-[7rem] pt-7">
            <img src={logo} alt="logo" className="w-[5rem] md:w-[7rem]" />

            <div className="flex flex-col items-center my-3 md:my-0">
              <img
                src={desktopMockup}
                alt=""
                className="hidden md:block w-[30rem] mb-10 mt-12 opacity-80"
              />
              <img src={mobileMockup} alt="" className="md:hidden" />
            </div>
            {initialText ? (
              <div className="w-full text-center">
                <h2 className="text-[17px] md:text-[24px] font-medium dark-blue">
                  Access packages & create custom trips
                </h2>
                <p className="md:leading-[20px] light-gray text-xs md:text-[16px]">
                  Packages Travel packages made for you Create custom trip
                  Access packages & create custom trips Explore ready made
                  packages from the best deals in the market for you. Tailor
                  your perfect adventure with our custom trip creation tool.
                </p>
              </div>
            ) : (
              <div className="w-full text-center">
                <h2 className="text-[17px] md:text-[24px] font-medium dark-blue">
                  Customize a payment plan for your dream trip
                </h2>
                <p className="md:leading-[20px] light-gray text-xs md:text-[16px]">
                  Choose a payment frequency that works for you to make your
                  dream trip happen. You can pay in installments before the
                  departure date is close.
                </p>
              </div>
            )}
            <div className="flex w-full justify-center my-5 gap-5">
              <div
                onClick={handleFirstSlide}
                className={`border-b-4 rounded-md cursor-pointer ${
                  color ? "border-[#1C9FDA]" : "border-gray-400"
                } w-10`}
              />
              <div
                onClick={handleSecondSlide}
                className={`border-b-4 rounded-md cursor-pointer ${
                  secondColor ? "border-[#1C9FDA]" : "border-gray-400"
                } w-10`}
              />
            </div>

            <div className="md:hidden w-full flex justify-center my-7">
              <div className="flex items-center justify-center bg-white w-10 h-10 rounded-full">
                <img src={arrowDown} alt="arrow down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
