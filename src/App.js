import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Search from "./pages/search/Search";
import Harvests from "./pages/harvests/Harvests";
import Products from "./pages/products/Products";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/search/:query">
            <Search />
          </Route>
          <Route path="/harvests">
            <Harvests />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
