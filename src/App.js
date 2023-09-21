import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfoilo from "./pages/Portfoilo/Portfoilo";
import Services from "./pages/Services/Services";
import { IntlProvider } from "react-intl";
import messages_en from "./utils/lang/locales/en_US.json";
import messages_fr from "./utils/lang/locales/fr_FR.json";
import messages_es from "./utils/lang/locales/es_ES.json";
import messages_fi from "./utils/lang/locales/fi_FI.json";
import messages_nl from "./utils/lang/locales/nl_NL.json";
import messages_pt from "./utils/lang/locales/pt_PT.json";
import messages_zh from "./utils/lang/locales/zh_ZH.json";
import { useTheme } from './utils/theme/ThemeContext';

function App() {
  const [locale, setLocale] = useState("en");

  const messages = {
    en: messages_en,
    fr: messages_fr,
    es:messages_es,
    fi:messages_fi,
    nl:messages_nl,
    pt:messages_pt,
    zh:messages_zh,
  };
  const handleSelectLanguage = (selectedLocale) => {
    setLocale(selectedLocale);
  };
  const { theme} = useTheme();
  const buttonStyles = {
    background: theme.primaryColor,
  };
  return (
    <div style={buttonStyles}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Navbar onSelectLanguage={handleSelectLanguage}/>
        <Home />
        <About />
        <Services />
        <Portfoilo />
        <Contact />
        <Footer />
      </IntlProvider>
    </div>
  );
}

export default App;
