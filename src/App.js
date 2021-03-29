import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Map1 from "./components/Map1";
import Map2 from "./components/Map2";
import Footer from "./components/Footer";

import { Reset } from "styled-reset";
import "./index.css";

function App() {

  return (
    <>
      <Reset />
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Map1} />
              <Route exact path="/reverse" component={Map2} />
            </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
