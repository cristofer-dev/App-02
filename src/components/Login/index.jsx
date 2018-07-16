import React from "react";
import css from "./login.css";

const Login = () => {
  
  return (
    <div className={css.login}>

      <div>
      <div className={css.title}>App 02</div>
      <div className={css.subtitle} >Login</div>
      
      </div>
      <div>
        <div>
          <input type="text" placeholder="username" />

          
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
      </div>
      <div>
        <button>Ingresar</button>
      </div>
      <div>No tienes cuenta? <a href="/signup">Registrate</a> </div>
    </div>
  );
};

export default Login;
