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
import { Link } from "react-router-dom";
import Typical from "react-typical";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
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
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
        {/* <div className="text-center">
          <img src={require("assets/img/NGG-official.png")} style={{width:"auto", height:""}}/>
        </div> */}
          <div className="motto text-center">
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
              className="btn-round mr-1"
              color="neutral"
              tag={Link}
              to="/photography"
              outline
            >
              <i className="fa fa-play" />
              Gallery
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
