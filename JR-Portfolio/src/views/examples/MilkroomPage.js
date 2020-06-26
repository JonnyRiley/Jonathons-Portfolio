import React from "react";
import { Container, Col, Row, NavLink } from "reactstrap";
import desktop from "../../assets/desktop1.png";
import freakshake from "../../assets/milkroom.png";
import video from "../../assets/mock3.gif";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function MilkroomPage() {
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
                      themilkroom <br />
                    </h1>
                    <Row>
                      {" "}
                      <NavLink
                        data-placement="bottom"
                        href="https://www.themilkroom.com"
                        target="_blank"
                        title="themilkroom web-app"
                      >
                        <img
                          class="w-50 p-3"
                          src={freakshake}
                          alt="milkroom webApp"
                        ></img>
                        <img
                          class="w-50 p-3"
                          src={desktop}
                          alt="milkroom webApp"
                        ></img>{" "}
                      </NavLink>
                    </Row>
                    <h4 className="description">
                      {" "}
                      My focus points for the web app centred on it being; user
                      centric, visually engaging and easy to navigate.
                      Importantly, I monitor the application analytics to assess
                      trends and popular pages to ensure that my focus points
                      are maintained over time.
                    </h4>
                  </div>
                  <NavLink
                    data-placement="bottom"
                    href="https://www.themilkroom.com"
                    target="_blank"
                    title="themilkroom web-app"
                  >
                    <img src={video} alt="milkroom webApp"></img>
                  </NavLink>
                  <h4 className="description">
                    I volunteer at this local start-up business to provide
                    technical solutions to improve efficiency with daily and
                    weekly tasks. I have implemented both payroll and pensions
                    software systems and maintain them on a weekly basis. After
                    graduating from NorthCoders, I created a full-stack web
                    application using react for the front-end and an express.js
                    RESTful API for the back-end. My focus points for the web
                    app centred on it being; user centric, visually engaging and
                    easy to navigate. Importantly, I monitor the application
                    analytics to assess trends and popular pages to ensure that
                    my focus points are maintained over time.
                  </h4>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col className="mr-auto" md="4" sm="5">
                        <img
                          alt="..."
                          class="w-100 p-3"
                          src={require("assets/react.png")}
                        />{" "}
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        {" "}
                        <img
                          alt="..."
                          class="w-100 p-3"
                          src={require("assets/html5.png")}
                        />
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        <img
                          alt="..."
                          class="w-75 p-3"
                          src={require("assets/CSS3.png")}
                        />
                      </Col>
                    </Row>
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

export default MilkroomPage;
