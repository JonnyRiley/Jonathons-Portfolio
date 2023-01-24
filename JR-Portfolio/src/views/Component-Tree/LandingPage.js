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
import { Link } from "react-router-dom";

import { Button, Container, Row, Col, NavLink } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Footer from "components/Footers/Footer.js";
import MyForm from "./Feedback-page";
import ProjectFooterPage from "./Project-Footer.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h5 className="description">
                  An adaptable, creative Full Stack Developer with three years' experience engaging in all phases of project lifecycles within an agile environment. Currently working within the corporate travel industry as Full Stack JavaScript Developer aiming to drive my career and expertise within the tech industry.
                </h5>
                <br />
                <NavLink
                  className="btn-round"
                  color="info"
                  to="/about"
                  tag={Link}
                >
                  <Button>About</Button>
                </NavLink>
              </Col>
            </Row>
            <ProjectFooterPage />
            <br />
            <br />
          </Container>
        </div>

        <div className="section bg-dark ">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <div className="text-center">
                  <h2 className="text-light">Keep in touch?</h2>
                </div>
                <MyForm />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
