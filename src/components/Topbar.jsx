import React, { useState } from "react";
import { FastSwitch } from "../app";
import useLightSide from "../hooks";

const Topbar = () => {
  const [colorTheme, setTheme] = useLightSide();
  const [lightSide, setLightSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleLightMode = () => {
    setTheme(colorTheme);
    setLightSide(!lightSide);
  };

  return (
    <div className="flex items-center justify-between pb-10">
      <h2 className="text-2xl font-bold">devfinder</h2>
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold tracking-widest uppercase">
          {colorTheme === "dark" ? "Light" : "Dark"}
        </span>
        <FastSwitch
          checked={lightSide}
          onClick={toggleLightMode}
          className="border-none outline-none"
        ></FastSwitch>
      </div>
    </div>
  );
};

export default Topbar;
