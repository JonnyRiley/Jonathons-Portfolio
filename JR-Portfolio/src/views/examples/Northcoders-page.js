import React from "react";
import { Container, Col, Row, NavLink } from "reactstrap";
import ncNews from "../../assets/nc-news.png";
import ncNews2 from "../../assets/nc-news2.png";
import NCBackEnd from "../../assets/NC-BE.png";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ProjectButtonPage from "./Project-button";

function NorthcodersPage() {
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
            <section className="d-flex justify-content-center">
              <div className="shadow preload">
                <Col className="ml-auto mr-auto text-center" md="10">
                  <div className="name">
                    <h1 className="title">
                      NC-NEWS <br />
                    </h1>
                    <Row>
                      <NavLink
                        data-placement="bottom"
                        href="https://ncbreakingnews.netlify.app"
                        target="_blank"
                        title="nc-news web-app"
                      >
                        {" "}
                        <img
                          className="w-50 p-3"
                          src={ncNews}
                          alt="milkroom webApp"
                        ></img>
                        <img
                          className="w-50 p-3"
                          src={ncNews2}
                          alt="milkroom webApp"
                        ></img>
                      </NavLink>
                    </Row>
                    <h4 className="description">
                      {" "}
                      A Full-Stack Reddit style news aggregation board. RESTful
                      API built with Node.js, JavaScript, Express.js and
                      frontend built using React.js, HTML and CSS. Testing was
                      carried out using Mocha, Chai and Supertest.
                    </h4>
                  </div>
                  <br></br>
                  <br></br>
                  <NavLink
                    data-placement="bottom"
                    href="https://portfolio-nc-news.herokuapp.com/api/"
                    target="_blank"
                    title="nc-news back-end"
                  >
                    <img
                      className="w-100 p-3"
                      src={NCBackEnd}
                      alt="milkroom webApp"
                    ></img>
                  </NavLink>
                  <ProjectButtonPage />

                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col className="mr-auto" md="4" sm="5">
                        <img
                          alt="..."
                          className="w-50 p-3"
                          src={require("assets/react.png")}
                        />{" "}
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        {" "}
                        <img
                          alt="..."
                          className="w-50 p-3"
                          src={require("assets/html5.png")}
                        />
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        <img
                          alt="..."
                          className="w-50 p-3"
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

export default NorthcodersPage;
