/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Typical from "react-typical";

// reactstrap components
import { Button, Container } from "reactstrap";

// reactstrap components

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
     <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/profileHeader2.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto" style={{textAlign:"left"}}>
            <h1 style={{fontWeight:500}}>Hi! I'm Jesse Appiah </h1>
            <h3>
            <Typical
            loop={Infinity}
            wrapper = "b"
            steps={[
                'Welcome to Nagy Studios',1000,
                'Creative Graphic Designs',1000,
                'Your word of Photography',1000
            ]}
            >
            </Typical>
            </h3>
            <br />
            <Button
              className="mr-1"
              color="info"
            >
              My Work
            </Button>
            <Button color="danger" type="button">
              Hire Me
            </Button>
            <br/>
            <br/>
            <Button
              className="btn-just-icon btn-neutral"
              color="link"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-twitter" style={{color:"#00ACEE"}}/>
            </Button>
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-facebook" style={{color:"#00ACEE"}}/>
            </Button>
            <Button
              className="btn-just-icon btn-neutral ml-1"
              color="link"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" style={{color:"#00ACEE"}}/>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
