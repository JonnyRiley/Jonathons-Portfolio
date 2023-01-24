import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Projects() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/NC-Photo copy.PNG")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Jonathon Riley <br />
              </h4>
            </div>
            <h5 className="col">
              As a Developer and an International Business graduate, I apply my knowledge to ensure optimal and innovative solutions are created. I recently demonstrated this through creating an automated selection process to enhance business sales and corporate processes. I have a clear, logical mind with a practical approach to problem solving and a drive to see things through to completion.
            </h5>
            <br />
            <NavLink className="btn-round" color="info" to="/about" tag={Link}>
              <Button>About</Button>
            </NavLink>
          </div>
          <Row>
            <div className="section text-center">
              <div className="title">
                <h2>Coding</h2>
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
                      src={require("assets/Northcoders-Assets/ncNews-thumbnail.png")}
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
                      src={require("assets/ReCharge-Assets/reChargeThumbnail.png")}
                    />
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>Flutter App</p>
                  </div>
                </Col>
              </Row>
              <Row>
                {" "}
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-end</h4>
                  <NavLink to="/mmg" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/MMG-Assets/MMG-Homepage.jpg")}
                    />
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>WIX/ Editor X Website</p>
                  </div>
                </Col>
              </Row>

              <div className="title">
                <h2>Business</h2>
              </div>
              <Row>
                <Col className="mr-auto" md="4" sm="5">
                  <h4 className="images-title">Vermilllion</h4>
                  <NavLink to="/vermillion" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-thumbnail img-responsive"
                      src={require("assets/img/faces/VermillionHat.jpg")}
                    />
                  </NavLink>
                  <p className="text-center"></p>
                </Col>
                <Col className="mr-auto" md="4" sm="5">
                  <h4 className="images-title">China</h4>
                  <NavLink to="/china" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-thumbnail img-responsive"
                      src={require("assets/China-Assets/china3.png")}
                    />
                  </NavLink>
                  <p className="text-center"></p>
                </Col>
                <Col className="mr-auto" md="4" sm="5">
                  <h4 className="images-title">Edge Hill University</h4>
                  <NavLink to="/university" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-thumbnail img-responsive"
                      src={require("assets/img/faces/Graduation.jpg")}
                    />
                  </NavLink>
                  <p className="text-center"></p>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
