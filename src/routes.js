import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main/Main";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);
