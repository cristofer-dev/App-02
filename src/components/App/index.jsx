import React from "react";
import { Route } from "react-router-dom";

import Home from "../Home";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Home} />
      <Route exact path="/signup" component={Home} />
    </div>
  );
};

export default App;
