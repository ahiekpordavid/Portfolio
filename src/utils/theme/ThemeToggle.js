import React from 'react'
import { useTheme } from './ThemeContext';
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const {  toggleTheme } = useTheme();
  return (
    <button
      style={{marginLeft:"20px" }}
      onClick={toggleTheme}
    >
      <MdOutlineLightMode style={{fontSize:"20px", background:"transparent"}}/>
    </button>
  );
}

export default ThemeToggle
