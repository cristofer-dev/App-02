import React from "react";
import { Route } from "react-router-dom";

import Home from "../Home";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        render={() => <Home miPropiedad="login" />}
      />
      <Route
        exact
        path="/signup"
        render={() => <Home miPropiedad="signup" />}
      />
      
    </div>
  );
};

export default App;
