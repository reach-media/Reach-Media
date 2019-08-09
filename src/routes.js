import React from "react";
import { Switch, Route } from "react-router-dom";
import Ourwork from './Our-work/OurWork'

import Main from "./Main/Main";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path='/ourwork' component={Ourwork}/>
  </Switch>
);
