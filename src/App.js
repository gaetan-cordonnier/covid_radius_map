import Header from "./components/Header";
import Map from "./components/Map";
import Footer from "./components/Footer";

import { Reset } from "styled-reset";
import "./index.css";

function App() {
  return (
    <>
      <Reset />
        <Header />
        <Map/>
        <Footer />
    </>
  );
}

export default App;
