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

function App() {
  const [locale, setLocale] = useState("en");

  const messages = {
    en: messages_en,
    fr: messages_fr,
  };
  const handleSelectLanguage = (selectedLocale) => {
    setLocale(selectedLocale);
  };
  return (
    <div className="App">
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
