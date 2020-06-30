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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Row, Container, NavLink, Navbar } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="ml-auto mr-auto text-center" md="10">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a>ALL RIGHT RESERVED</a>
                </li>
                <li>
                  <a>Copyright 2020©</a>
                </li>
                <li>
                  <NavLink to="/license" tag={Link}>
                    Licenses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
