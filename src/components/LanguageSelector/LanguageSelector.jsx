import React from "react";
import "./LanguageSelector.css";

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(
    () => window.matchMedia(query).matches
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

const LanguageSelector = ({ onSelectLanguage }) => {
  const isSmallScreen = useMediaQuery("(max-width: 425px)");

  const languageOptions = [
    { value: "en", label: isSmallScreen ? "EN" : "English" },
    { value: "fr", label: isSmallScreen ? "FR" : "Français" },
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
