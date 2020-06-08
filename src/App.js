import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Contact from "./pages/contact/contact";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact">
            <Menu />
            <Contact />
          </Route>
          <Redirect from="/" to="/contact" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
