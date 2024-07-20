import reactLogo from "./assets/react.svg";
import "./index.css";

import { Header } from "./components/Header";
import { Page1 } from "./components/Page1";
import { BodySlider } from "./components/BodySlider";
import { Footer } from "./components/Footer";
import { Certificacoes } from "./components/Certificacoes";
import { Page2 } from "./components/Page2";

function App() {
  return (
    <div className="Page flex flex-col">
      <Header />

      <BodySlider />
      <Page1 />
      <Page2 />
      <Certificacoes />
      <Footer />
    </div>
  );
}

export default App;
