import React, { useState, useRef } from "react";
import PinInput from "react-pin-input";

import { Link } from "react-router-dom";

import { Mockup } from "../components";
import returnIcon from "../assets/images/return.png";

const ConfirmOTP = () => {
  const [value, setValue] = useState("");
  const pinRef = useRef(null);

  const onChange = (value) => {
    setValue(value);
  };

  const onClear = () => {
    setValue("");
    pinRef.current.clear();
  };
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <Mockup />
        </div>

        <div className="md:w-[50%] mb-10 md:mb-0">
          <div className="w-full px-[1rem] md:px-[7rem] pt-7">
            <div className="w-full text-right">
              <Link to="/signup">
                <span>Create an account</span>
              </Link>
            </div>

            <div className="w-full flex flex-col gap-8">
              <div>
                <h2 className="text-[24px] font-medium dark-blue">
                  Confirm OTP
                </h2>
                <p className="text-sm">
                  A 6-digit confirmation code was sent to your email address
                  please enter below
                </p>
              </div>

              <div className="flex w-full md:justify-center">
                <PinInput
                  length={6}
                  focus
                  // disabled
                  // secret
                  ref={pinRef}
                  type="numeric"
                  onChange={onChange}
                  onComplete={(value, index) => {
                    console.log(value);
                  }}
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  inputStyle={{
                    borderColor: "gray",
                    borderRadius: "7px",
                    margin: "0 0.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                  inputFocusStyle={{ borderColor: "#1c9fda" }}
                />
              </div>

              <div className="flex flex-col gap-7">
                <div className="text-center">
                  <p>
                    O.T.P will expire in 0:48{" "}
                    <span className="font-medium text-[#1c9fda]">
                      Resend O.T.P
                    </span>
                  </p>
                </div>
                <div className="w-full justify-center">
                  <Link to="/login" className="flex justify-center gap-5">
                    <img src={returnIcon} alt="return" />
                    <span className="text-[#1c9fda]">Return to Log In</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOTP;
