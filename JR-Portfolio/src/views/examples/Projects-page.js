import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
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
              In addition to Coding, I studied International Business throughout
              my time at College and University. This enabled me to develop a
              wide variety of skills and knowledge of the business world. I
              attended Edge Hill University and wrote my dissertation on the
              automobile leasing industry. I believe that this experience drove
              my desire to initiate my entrepreneurial self. I partnered with a
              local brand Vermillion to distribute Hats across the North West,
              UK.
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
      <DemoFooter />
    </>
  );
}

export default Projects;
