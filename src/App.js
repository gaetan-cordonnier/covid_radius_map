import Header from "./components/Header";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Loader from "react-loader-spinner";

import { Reset } from "styled-reset";
import "./index.css";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Loader
        className="spinner"
        type="ThreeDots"
        color="#F5F5F5"
        height={100}
        width={100}
        timeout={1500}
      />
      <Map />
      <Footer />
    </>
  );
}

export default App;
