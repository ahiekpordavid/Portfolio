import React from "react";
import "./LanguageSelector.css";

const LanguageSelector = ({ onSelectLanguage }) => {
  const isSmallScreen = true;

  const languageOptions = [
    { value: "en", label: isSmallScreen ? "EN" : "English" },
    { value: "fr", label: isSmallScreen ? "FR" : "Français" },
    { value: "es", label: isSmallScreen ? "ES" : "Español" }, 
    { value: "pt", label: isSmallScreen ? "PT" : "Português" },
    { value: "nl", label: isSmallScreen ? "NL" : "Nederlands" },
    { value: "fi", label: isSmallScreen ? "FI" : "Finnish" },
    { value: "zh", label: isSmallScreen ? "中文" : "Chinese" }, 
  ];

  return (
    <div className="language-selector">
        <select
          className={`language-dropdown ${
            isSmallScreen ? "text-short" : "text-large"
          }`}
          onChange={(e) => onSelectLanguage(e.target.value)}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    </div>
  );
};

export default LanguageSelector;
