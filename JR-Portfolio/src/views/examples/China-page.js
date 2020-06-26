import React from "react";
import { Container, Col, Row } from "reactstrap";
import ChinaMain from "../../assets/China-Assets/china.png";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
function ChinaPage() {
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
          <Row>
            <section class="d-flex justify-content-center">
              <div class="shadow preload">
                <Col className="ml-auto mr-auto text-center" md="10">
                  <div className="name">
                    <h1 className="title">
                      China <br />
                    </h1>
                    <Row>
                      <div class="d-flex justify-content-center">
                        {" "}
                        <img
                          class="w-75 p-3"
                          src={ChinaMain}
                          alt="milkroom webApp"
                        ></img>
                      </div>
                    </Row>
                    <h4 className="description">
                      {" "}
                      I travelled independently to China after making
                      connections with a Chinese teacher in the UK who informed
                      me about the demand for English teachers in China. Seeing
                      an exciting opportunity, I pursued this as a work
                      experience programme during the summer after my second
                      year at university.<br></br>
                      <br></br> Prior to this I had to commit to basic Chinese
                      lessons but more importantly understand the dynamic
                      education structure within China. After arriving in China
                      part of my role was creating a progressive partnership
                      between the Chinese school I was based with and other
                      international schools from Thailand, Mongolia and
                      Uzbekistan.
                    </h4>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col className="mr-auto" md="4" sm="4">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/China-Assets/china2.png")}
                        />{" "}
                      </Col>
                      <Col className="mr-auto" md="4" sm="3">
                        {" "}
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/China-Assets/china5.png")}
                        />
                      </Col>
                      <Col className="mr-auto" md="4" sm="4">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/China-Assets/china6.png")}
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
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ChinaPage;
