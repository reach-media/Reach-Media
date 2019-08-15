import React from "react";
import { Switch, Route } from "react-router-dom";
import Ourwork from "./Our-work/OurWork";
import Blog from "./Blog/Blog";
import Main from "./Main/Main";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Contact from "./ContactUs/ContactUs";
import Error from "./Error/Error";

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/whoWeAre" component={WhoWeAre} />
    <Route path="/WhatWeDo" component={WhatWeDo} />
    <Route exact path="/ourwork" component={Ourwork} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/contactus" component={Contact} />
    <Route path="/error" component={Error} />
  </Switch>
);
