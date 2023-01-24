import React from "react";
import { Container, Col, Row, NavLink } from "reactstrap";
import MMGPhone from "../../assets/MMG-Assets/MMG-Phone-Homepage.png";
import MMGPhone2 from "../../assets/MMG-Assets/MMG-Phone-Products.png";
import MMGProductManagement from "../../assets/MMG-Assets/MMG-ProductManagement.jpg";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";
import ProjectButtonPage from "./Project-button";

function MMGPage() {
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
                      Migraine Miracle Glasses <br />
                    </h1>
                    <Row>
                      <NavLink
                        data-placement="bottom"
                        href="https://www.migrainemiracleglasses.com"
                        target="_blank"
                        title="MMG Website"
                      >
                        {" "}
                        <img
                          className="w-50 p-3"
                          src={MMGPhone}
                          alt="milkroom webApp"
                        ></img>
                        <img
                          className="w-50 p-3"
                          src={MMGPhone2}
                          alt="milkroom webApp"
                        ></img>
                      </NavLink>
                    </Row>
                    <h4 className="description">
                      {" "}
                      A website built for a local business that wanted to create
                      an online presence during Covid-19. I had full
                      responsibility of this project and was able to complete it
                      in just six days. My client wanted the website to be
                      simple but effective whilst having the ability to monitor
                      and adjust the stock by themselves. As you can see i found
                      Wix and Editor X was a great way for this to happen with
                      such a short deadline to incorporate all aspects of the
                      website without reducing the quality of my work. <br></br>{" "}
                      <br></br>I had the responsibility of all social media
                      accounts as well as setting up email and payment accounts.
                      In addition, SEO, Social Sharing, DNS and Connecting an
                      external Domain where some of the overall tasks completed
                      within this time frame.
                    </h4>
                  </div>
                  <br></br>
                  <br></br>
                  <img
                    className="w-100 p-3"
                    src={MMGProductManagement}
                    alt="milkroom webApp"
                  ></img>

                  <ProjectButtonPage />

                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col className="mr-auto" md="4" sm="5">
                        <img
                          alt="..."
                          className="w-50 p-3"
                          src={require("assets/MMG-Assets/wix.png")}
                        />{" "}
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        {" "}
                        <img
                          alt="..."
                          className="w-100 p-3"
                          src={require("assets/MMG-Assets/editorX.png")}
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
      <Footer />
    </>
  );
}

export default MMGPage;
