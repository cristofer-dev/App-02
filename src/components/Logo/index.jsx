import React from "react";
import css from "./logo.css";

const Logo = () => {
  return (
    <div className={css.logo}>
      <div className={css.title}>App02</div>
      <div className={css.subtitle}>App number two</div>
      <div><a href="/login">Login</a></div>
      <div><a href="/signup">Signup</a></div>
    </div>
  );
};

export default Logo;
