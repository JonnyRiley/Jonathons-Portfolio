/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import Projects from "views/examples/Projects-page.js";
import MilkroomPage from "./views/examples/MilkroomPage.js";
import NorthcodersPage from "./views/examples/Northcoders-page.js";
import ReChargePage from "./views/examples/ReCharge-page.js";
import VermillionPage from "./views/examples/Vermillion-page.js";
import ChinaPage from "./views/examples/China-page.js";
import EdgeHillPage from "./views/examples/EdgeHill-page.js";

// others
import About from "views/examples/About-page.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route path="/milkroom" render={(props) => <MilkroomPage {...props} />} />
      <Route path="/reCharge" render={(props) => <ReChargePage {...props} />} />
      <Route
        path="/northcoders"
        render={(props) => <NorthcodersPage {...props} />}
      />
      <Route
        path="/vermillion"
        render={(props) => <VermillionPage {...props} />}
      />
      <Route path="/china" render={(props) => <ChinaPage {...props} />} />
      <Route
        path="/university"
        render={(props) => <EdgeHillPage {...props} />}
      />

      <Route path="/projects" render={(props) => <Projects {...props} />} />
      <Route path="/about" render={(props) => <About {...props} />} />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
