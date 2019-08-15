import React from "react";
import { Switch, Route } from "react-router-dom";
import Ourwork from "./Our-work/OurWork";
import Blog from "./Blog/Blog";
import Main from "./Main/Main";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Contact from "./ContactUs/ContactUs";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/ourwork" component={Ourwork} />
    <Route path="/blog" component={Blog} />
    <Route path="/whoWeAre" component={WhoWeAre} />
    <Route path="/contactus" component={Contact} />
  </Switch>
);
