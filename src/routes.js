import React from "react";
import { Switch, Route } from "react-router-dom";
import Ourwork from './Our-work/OurWork'
import Blog from "./Blog/Blog"

import Main from "./Main/Main";

export default (
  <Switch>

    <Route path='/ourwork' component={Ourwork}/>
    <Route path='/blog'/>
    <Route exact path="/" component={Main} />
  </Switch>
);
