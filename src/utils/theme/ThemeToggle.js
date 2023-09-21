import React from 'react'
import { useTheme } from './ThemeContext';
import {VscColorMode} from "react-icons/vsc"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor,marginLeft:"20px" }}
      onClick={toggleTheme}
    >
      <VscColorMode style={{fontSize:"20px"}}/>
    </button>
  );
}

export default ThemeToggle
