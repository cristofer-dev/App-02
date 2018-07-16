import React from "react";
import css from "./home.css";

import Logo from "../Logo";
import Login from "../Login";
import Signup from "../Signup";

const Home = props => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        {props.miPropiedad == "login" && <Login />}
        {props.miPropiedad == "signup" && <Signup />}
        {props.miPropiedad == undefined && <Logo />}
      </div>
    </div>
  );
};

export default Home;
