import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Slider = () => {
  const [initial, setInitial] = useState(true);
  const [second, setSecond] = useState(false);

  return (
    <div>
      <div>
        <img src={logo} alt="" />
        {initial ? <p>Initial</p> : <p>absolute</p>}
        <p onClick={() => setInitial(true)}>One</p>
        <p onClick={() => setInitial(false)}>Two</p>
      </div>
    </div>
  );
};

export default Slider;
