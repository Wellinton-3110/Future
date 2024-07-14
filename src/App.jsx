import reactLogo from "./assets/react.svg";
import "./index.css";

import { Header } from "./components/Header";
import { Page1 } from "./components/Page1";
import { BodySlider } from "./components/BodySlider";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="Page flex flex-col">
      <Header />

      <BodySlider />
      <Page1 />
      <Footer />
    </div>
  );
}

export default App;
