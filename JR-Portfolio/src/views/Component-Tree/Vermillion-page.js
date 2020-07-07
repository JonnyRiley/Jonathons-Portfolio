import React from "react";
import { Container, Col, Row, NavLink } from "reactstrap";
import vermillion from "../../assets/Vermillion-Assets/vermillion.png";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";
import ProjectButtonPage from "./Project-button";
function VermillionPage() {
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
          <div className="shadow preload">
            <Col className="ml-auto mr-auto text-center" md="10">
              <div className="name">
                <h1 className="title">
                  Vermillion <br />
                </h1>
                <div className="h-50 d-inline-block">
                  <img
                    className="h-50 w-75 p-3"
                    src={vermillion}
                    alt="vermillion"
                  ></img>
                </div>
                <h4 className="description">
                  {" "}
                  I have partnered with a local Brand to distribute caps across
                  the North West, UK. Vermillion is a brand focused in the
                  fashion industry selling products from shoes, wallets, card
                  holders and clothing etc. I have yet to implement my tech
                  skill set into this business due to time constraints however,
                  this is something that I am looking to do in the near future.
                </h4>
                <ProjectButtonPage />
              </div>
            </Col>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col className="mr-auto" md="4" sm="4">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/Vermillion-Assets/card-holder.png")}
                />{" "}
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                {" "}
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/Vermillion-Assets/venice.png")}
                />
              </Col>
              <Col className="mr-auto" md="4" sm="4">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/Vermillion-Assets/t-shirt.png")}
                />
                <br></br>
                <br></br>
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <p>
                Be sure to Follow us on Instagram!
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/vermillion_official/"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  {" "}
                  @Vermillion_Official
                </NavLink>
              </p>
            </div>{" "}
            <br></br>
            <br></br>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default VermillionPage;
