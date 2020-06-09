import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact/contact";
import HomePage from "./pages/homePage/HomePage";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Menu />
            <HomePage />
          </Route>
          <Route path="/contact">
            <Menu />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
