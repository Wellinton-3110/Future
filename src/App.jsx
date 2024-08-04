import "./index.css";

import { Header } from "./components/Header";
import { Page1 } from "./components/Page1";
import { BodySlider } from "./components/BodySlider";
import { Footer } from "./components/Footer";
import { Certificacoes } from "./components/Certificacoes";
import { Page2 } from "./components/Page2";
import { createContext, useRef, useState, useEffect } from "react";
import { ArrowDown } from "./components/arrows/ArrowDown";
import { ArrowTop } from "./components/arrows/ArrowTop";

export const MyContext = createContext();

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollY);

    // Limpar o evento de escuta quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarRef = useRef(null);

  const scrollToNav = () => {
    if (navBarRef.current) {
      navBarRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Page flex flex-col">
      <MyContext.Provider value={{ navBarRef, scrollToNav }}>
        <ArrowDown />
        {scrollY > 2000 ? <ArrowTop /> : ""}
        <Header navBarRef={navBarRef} />

        <BodySlider />
        <Page1 />
        <Page2 />
        <Certificacoes />
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
