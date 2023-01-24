import React from "react";
import { Container, Col, Row, NavLink } from "reactstrap";
import vt_image from "../../assets/Trailfinders-Assets/VT-Image.png";
import payment_image from "../../assets/Trailfinders-Assets/Payment-Logos.png";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";


function TrailfindersPage() {
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
                  Trailfinders<br />
                </h1>
                <Container>
                  {" "}
                  <Row className="justify-content-center">
                    {" "}
                    <NavLink
                    
                      data-placement="bottom"
                      href="https://www.trailfinders.com"
                      target="_blank"
                      title="Trailfinders"
                    >
                      <img
                        className="w-50 p-3"
                        src={vt_image}
                        alt="Trailfinders_Image"
                      ></img>
                    </NavLink>
                  </Row>
                  <h4 className="description">
                    <b>• E-Leads:</b> I have created an automated selection process along with a Realtime User Interface. This service enables the user to be contacted efficiently via a suitable and location appropriate travel consultant to reduce the customer response time. Some of the technologies used for this project where Node.js, Vue.js, MongoDB and Socket.io.<br /><br />
                    <b>• Bespoke Travel Itinerary:</b> I have developed complex functionality to create bespoke travel itineraries for users. I mapped out the end-to-end process, this was a technically challenging project due to the requirement for service adaptability. The project needed to be flexible to process multiple travel options when creating a bespoke holiday and this service is used across all branches in UK and Ireland to increase upselling.<br /><br />
                    <b>• React/TypeScript:</b> I had the responsibility to learn React and TypeScript on the job, create a template designed for all future internal applications and introduce this language and framework to the development team. This modernised Trailfinders tech stack along with upskilling the wider team.<br /><br />
                  </h4>
                  <h4 className="description">
                    <b>• Apple and Google Pay Integration:</b> I implemented both into the existing business payment system across five different platforms.
                  </h4>
                  <Row className="justify-content-center">
                    {" "}
                    <NavLink
                    
                      data-placement="bottom"
                      href="https://www.trailfinders.com"
                      target="_blank"
                      title="Trailfinders"
                    >
                      <img
                        className="w-25 p-3"
                        src={payment_image}
                        alt="Payment_Logos_Image"
                      ></img>
                    </NavLink>
                  </Row>
                </Container>
                <br></br>
              </div>
            </Col>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default TrailfindersPage;
