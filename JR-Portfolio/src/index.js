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
import Projects from "views/Component-Tree/Projects-page.js";
import MilkroomPage from "./views/Component-Tree/MilkroomPage.js";
import NorthcodersPage from "./views/Component-Tree/Northcoders-page.js";
import ReChargePage from "./views/Component-Tree/ReCharge-page.js";
import VermillionPage from "./views/Component-Tree/Vermillion-page.js";
import ChinaPage from "./views/Component-Tree/China-page.js";
import EdgeHillPage from "./views/Component-Tree/EdgeHill-page.js";
import Trailfinders from "./views/Component-Tree/Trailfinders.js"
// others
import About from "views/Component-Tree/About-page.js";
import LicensePage from "views/Component-Tree/License.js";
import LandingPage from "views/Component-Tree/LandingPage.js";
import MMGPage from "views/Component-Tree/MMGPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route path="/portfolio" render={(props) => <LandingPage {...props} />} />
      <Route path="/milkroom" render={(props) => <MilkroomPage {...props} />} />
      <Route path="/reCharge" render={(props) => <ReChargePage {...props} />} />
      <Route path="/trailfinders" render={(props) => <Trailfinders {...props} />} />
      <Route
        path="/northcoders"
        render={(props) => <NorthcodersPage {...props} />}
      />
      <Route
        path="/vermillion"
        render={(props) => <VermillionPage {...props} />}
      />
      <Route path="/mmg" render={(props) => <MMGPage {...props} />} />
      <Route path="/china" render={(props) => <ChinaPage {...props} />} />
      <Route
        path="/university"
        render={(props) => <EdgeHillPage {...props} />}
      />

      <Route path="/projects" render={(props) => <Projects {...props} />} />
      <Route path="/about" render={(props) => <About {...props} />} />
      <Route path="/license" render={(props) => <LicensePage {...props} />} />
      <Redirect to="/portfolio" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
