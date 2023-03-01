import React, { useState } from "react";

import logo from "../assets/images/logo.png";
import desktopMockup from "../assets/images/desktop-mockup.png";
import mobileMockup from "../assets/images/mobile-mockup.png";
import { LoginForm, Mockup } from "../components";

const Login = () => {
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
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-[50%]">
          <Mockup />
        </div>

        <div className="flex-1 md:w-[50%] h-[100vh] mb-10 md:mb-0">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
