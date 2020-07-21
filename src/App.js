import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//importing components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import HomeFr from "./components/HomeFr";
import ErrorCatch from "./components/ErrorCatcher";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/homefr" component={HomeFr} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={ContactUs} />
            <Route component={ErrorCatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
