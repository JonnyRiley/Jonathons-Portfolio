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

import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavLink,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

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
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <Container>
              <div className="nav-tabs-navigation">
                <h2>Projects</h2>
              </div>
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
                    <div className="img-details">
                      <p>React Web App</p>
                    </div>
                  </NavLink>
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
                    <div className="img-details">
                      <p>React Web App</p>
                    </div>
                  </NavLink>
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
                    <div className="img-details">
                      <p>Flutter App</p>
                    </div>
                  </NavLink>
                </Col>
              </Row>
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
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label className="text-light">Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label className="text-light">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label className="text-light">Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
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
