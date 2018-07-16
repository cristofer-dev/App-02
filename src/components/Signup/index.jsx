import React from "react";
import css from "./signup.css";

const Signup = () => {
  return (
    <div className={css.signup}>
      <div>
        <div className={css.title}>App 02</div>
        <div className={css.subtitle}>Signup</div>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="text" placeholder="Last name" />
        </div>
        <div>
          <input type="mail" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <input type="password" placeholder="repeat password" />
        </div>
      </div>
      <div>
        <button>Create account</button>
      </div>
      <div>tienes cuenta? <a href="/login">Ingresar</a> </div>
    </div>
  );
};

export default Signup;
