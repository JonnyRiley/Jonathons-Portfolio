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

import { Container, Row, Col, NavLink } from "reactstrap";
import ProjectButtonPage from "./Project-button";

function ProjectFooterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <Container>
        <div className="section text-center">
          <div className="title">
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
          <ProjectButtonPage />
        </div>
      </Container>
    </>
  );
}

export default ProjectFooterPage;
