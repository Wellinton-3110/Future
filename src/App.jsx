import reactLogo from "./assets/react.svg";
import "./index.css";

import { Header } from "./components/Header";
import { Page1 } from "./components/Page1";
import { BodySlider } from "./components/BodySlider";
import { Footer } from "./components/Footer";
import { Certificacoes } from "./components/Certificacoes";

function App() {
  return (
    <div className="Page flex flex-col">
      <Header />

      <BodySlider />
      <Page1 />
      <Certificacoes />
      <Footer />
    </div>
  );
}

export default App;
