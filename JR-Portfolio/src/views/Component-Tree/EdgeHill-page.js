import React from "react";
import { Container, Col, Row } from "reactstrap";
import ChinaMain from "../../assets/Uni-Assets/uni2.png";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";
import ProjectButtonPage from "./Project-button";
function EdgeHillPage() {
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
          <section className="d-flex justify-content-center">
            <div className="shadow preload">
              <Col className="ml-auto mr-auto text-center" md="10">
                <div className="name">
                  <h1 className="title">
                    University <br />
                  </h1>
                  <Row className="d-flex justify-content-center">
                    <div className="h-75 d-inline-block">
                      {" "}
                      <img
                        className="w-75 p-3"
                        src={ChinaMain}
                        alt="milkroom webApp"
                      ></img>
                    </div>
                  </Row>
                  <h4 className="description">
                    {" "}
                    My particular interest within the course was focusing on the
                    international element, especially how the global economy is
                    becoming more reliant on emerging technologies.
                    <br></br> <br></br> I have developed an appreciation for
                    cultural differences when studying the global development of
                    the Chinese economy and have been able to explore this
                    further on my work experience within China during my degree.
                    Modules in Accounts and Finance and Digital Goods have
                    benefitted my planning and management skills. <br></br>{" "}
                    <br></br> Critical thinking and problem-solving skills were
                    applied to my dissertation topic – titled; “What are the key
                    contributing factors to leasing within the automobile
                    industry”. This research enhanced the inspiration for my App
                    around how technology is supporting the global car industry.
                  </h4>
                  <ProjectButtonPage />
                </div>

                <br></br>
                <br></br>
                <Container>
                  <Row>
                    <Col className="mr-auto" md="4" sm="4">
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/Uni-Assets/uni3.png")}
                      />{" "}
                    </Col>
                    <Col className="mr-auto" md="4" sm="3">
                      {" "}
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/Uni-Assets/uni.png")}
                      />
                    </Col>
                    <Col className="mr-auto" md="4" sm="4">
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/Uni-Assets/uni1.png")}
                      />
                      <br></br>
                      <br></br>
                    </Col>
                  </Row>

                  <br></br>
                  <br></br>
                </Container>
              </Col>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default EdgeHillPage;
