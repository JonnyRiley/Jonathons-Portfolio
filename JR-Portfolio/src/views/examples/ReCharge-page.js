import React from "react";
import { Container, Col, Row } from "reactstrap";
import reCharge from "../../assets/reChargeApp.png";
import reCharge2 from "../../assets/reChargeApp2.png";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ReChargePage() {
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
                      reCharge <br />
                    </h1>
                    <Row>
                      {" "}
                      <img
                        className="w-50 p-3"
                        src={reCharge}
                        alt="milkroom webApp"
                      ></img>
                      <img
                        className="w-50 p-3"
                        src={reCharge2}
                        alt="milkroom webApp"
                      ></img>
                    </Row>
                    <h4 className="description">
                      {" "}
                      On completion of my time at NorthCoders, it was required
                      to complete a project to present on the day of my
                      graduation. reCharge was created by myself and three other
                      team members in just two weeks. You can watch it here!
                    </h4>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="Graduation Video"
                      className="embed-responsive-item"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/4RUl9N7pYt4"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <br></br>

                  <h4 className="description">
                    This project was based around horizon scanning and thinking
                    about technological tools that can support efforts in
                    creating a sustainable future. My project was focused on how
                    the car industry is going to change by the year 2030.{" "}
                    <br></br>
                    <br></br>I wanted to create a mobile application that was
                    accessible to all users by giving the user the ability to
                    navigate and plan their journey by highlighting the use of
                    electric car charging points, along with suggesting nearby
                    locations to visit whilst at each point of interest. The
                    goal was to self-teach the UI software development kit
                    Flutter and the client-optimizing language Dart that is
                    native to Flutter.<br></br>
                    <br></br>
                    In order to retrieve the data multiple Google API’s where
                    used in correlation with the OpenCharge Map API. The
                    back-end was built using Ruby on Rails and PostgreSQL. This
                    was set to challenge and test my ability to learn a new tech
                    stack under-pressure and build an App within the time
                    constraint of two weeks. I am proud that this project was
                    completed and presented on time and can be viewed upon
                    request.
                  </h4>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col className="mr-auto" md="4" sm="4">
                        <img
                          alt="..."
                          className="w-100 p-3"
                          src={require("assets/flutter-logo.png")}
                        />{" "}
                      </Col>
                      <Col className="mr-auto" md="4" sm="4">
                        {" "}
                        <img
                          alt="..."
                          className="w-100 p-3"
                          src={require("assets/dart-logo.png")}
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

export default ReChargePage;
