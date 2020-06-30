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
import DemoFooter from "components/Footers/DemoFooter.js";
import MyForm from "./Feedback-page";

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
                  An adaptable and responsible Business graduate that has
                  recently completed an industry-led coding Bootcamp,
                  NorthCoders. I have a clear, logical mind with a practical
                  approach to problem solving and a drive to see things through
                  to completion. Coding has enabled me to further my curiosity
                  into problem solving and how the world of tech works.
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
            <Container>
              <h2 color="default">Projects</h2>

              <Row>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End/Back-End</h4>
                  <NavLink to="/milkroom" tag={Link}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/faces/milkroom.png")}
                    />{" "}
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>React Web App</p>
                  </div>
                </Col>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End/Back-End</h4>
                  <NavLink to="/northcoders" tag={Link}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/ncNews-thumbnail.png")}
                    />
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>React Web App</p>
                  </div>
                </Col>{" "}
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-end</h4>
                  <NavLink to="/reCharge" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/reChargeThumbnail.png")}
                    />
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>Flutter App</p>
                  </div>
                </Col>
              </Row>
              <br />
              <NavLink
                className="btn-round"
                color="info"
                to="/about"
                tag={Link}
              >
                <Button>See More</Button>
              </NavLink>
            </Container>
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
      <DemoFooter />
    </>
  );
}

export default LandingPage;
