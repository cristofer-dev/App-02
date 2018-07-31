import React from "react";
import { Route } from "react-router-dom";
import css from "./home.css";

import Logo from "../Logo";
import Login from "../Login";
import Signup from "../Signup";

const Home = props => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Logo} />
      </div>
    </div>
  );
};

export default Home;
