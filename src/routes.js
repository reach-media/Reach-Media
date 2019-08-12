import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main/Main";
import Contact from "./ContactUs/ContactUs"

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path = "/contact" component = {Contact}/>
  </Switch>
);
