import React from "react";
import { Switch, Route } from "react-router-dom";
import Ourwork from './Our-work/OurWork'
import Blog from "./Blog/Blog"
import Main from "./Main/Main";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path='/ourwork' component={Ourwork}/>
    <Route path='/blog' component={Blog}/>
  </Switch>
);
