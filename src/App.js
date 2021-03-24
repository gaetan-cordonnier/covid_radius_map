import { Reset } from "styled-reset";
import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
