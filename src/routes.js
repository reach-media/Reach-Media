import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main/Main";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/whoWeAre" component={WhoWeAre} />
  </Switch>
);
