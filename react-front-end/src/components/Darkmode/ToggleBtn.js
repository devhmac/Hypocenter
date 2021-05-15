import React, { useContext } from "react";
import { stateContext } from '../../contextProviders/stateContext'
import { IoMdSunny as Sun } from "react-icons/io";

import ThemeContext from "./ThemeContext";

function ToggleBtn() {
  const { dark, toggle } = useContext(ThemeContext);
  const { state, setState } = useContext(stateContext);

  const switchMode = () => {
    setState(prev => {
      return { ...prev,
        dark: !prev.dark
      }
    })

    toggle();
  }

  return (
    <button onClick={() => switchMode()} className="toggle-btn">
      <Sun className={`icon ${!dark ? "active" : ""}`} />
    </button>
  );
}

export default ToggleBtn;
