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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Gallery from 'react-grid-gallery';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const gridImages =
      [ 
            {
              src: require("assets/img/GridImages/grid2.jpeg"),
              thumbnail: require("assets/img/GridImages/grid2.jpeg"),
              thumbnailWidth: 357,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid4.jpeg"),
              thumbnail: require("assets/img/GridImages/grid4.jpeg"),
              thumbnailWidth: 250,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid3.jpeg"),
              thumbnail: require("assets/img/GridImages/grid3.jpeg"),
              thumbnailWidth: 357,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid5.jpeg"),
              thumbnail: require("assets/img/GridImages/grid5.jpeg"),
              thumbnailWidth: 250,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid2.jpeg"),
              thumbnail: require("assets/img/GridImages/grid2.jpeg"),
              thumbnailWidth: 357,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid4.jpeg"),
              thumbnail: require("assets/img/GridImages/grid4.jpeg"),
              thumbnailWidth: 250,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid3.jpeg"),
              thumbnail: require("assets/img/GridImages/grid3.jpeg"),
              thumbnailWidth: 357,
              thumbnailHeight: 236,
              caption: "Events"
            },
            {
              src: require("assets/img/GridImages/grid5.jpeg"),
              thumbnail: require("assets/img/GridImages/grid5.jpeg"),
              thumbnailWidth: 250,
              thumbnailHeight: 236,
              caption: "Events"
            },
            
            ]



  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="4" style={{textAlign:"left"}}>
                <h2 className="title" style={{fontWeight:600}}>Creative Designs That Make Your Work Stand Out</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="4" style={{textAlign:"left"}}>
                <h2 className="title" style={{fontWeight:600}}>Let's talk product</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product.
                </h5>
                <Button className="btn-link" color="info" href="#pablo">
                     <i className="fa fa-chevron-down"/>
                </Button>
              </Col>
              <Col className="ml-auto mr-auto" md="4" style={{textAlign:"left"}}>
                <h2 className="title" style={{fontWeight:600}}>Tell Us About Your Project</h2>
                <Button  color="info" outline>
                      Talk to us
                </Button>
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
        
        <div className="section text-center">
          <Container>
            <Row>
            <h2 className="title text-center" style={{fontWeight:600, borderBottom:"0.25em solid #1bbbb3", textAlign:"center"}}>Photography</h2>
            <br/>
              <Col md="12">
                <Gallery images={gridImages}/>
              </Col>
            </Row>
            <br/>
            <Row style={{marginTop:"20px"}}>
              <Col>
              <h5 className="description" style={{textAlign:"left"}}>
              We create advertising photography with professional equipment and studio lighting. We do as well the post-production.
              </h5>
              </Col>
              <Col>
               
              <Button style={{backgroundColor:"#1bbbb3", borderColor:"#1bbbb3"}}>Contact Us</Button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section text-center">
          <Container>
            <Row>
            <h2 className="title text-center" style={{fontWeight:600, borderBottom:"0.25em solid #00346f", textAlign:"center"}}>Graphic Designs</h2>
            <br/>
              <Col md="12">
                <Gallery images={gridImages}/>
              </Col>
            </Row>
            <br/>
            <Row style={{marginTop:"40px"}}>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" style={{color:"#00346f"}}/>
                  </div>
                    <h4 className="info-title" style={{fontWeight:600}}>Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" style={{color:"#00346f"}}/>
                  </div>
                    <h4 className="info-title" style={{fontWeight:600}}>New Ideas</h4>
                    <p  className="description">
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" style={{color:"#00346f"}} />
                  </div>
                    <h4 className="info-title" style={{fontWeight:600}}>Statistics</h4>
                    <p  className="description">
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                </div>
              </Col>
            </Row>

            <Row style={{marginTop:"40px"}}>
              <Col>
              <h5 className="description" style={{textAlign:"left"}}>
              We create advertising photography with professional equipment and studio lighting. We do as well the post-production.
              </h5>
              </Col>
              <Col>
               
              <Button style={{backgroundColor:"#00346f", borderColor:"#00346f"}}>Contact Us</Button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <Row>
            <h2 className="title text-center" style={{fontWeight:600, borderBottom:"0.25em solid #f5593d", textAlign:"center"}}>Contact Us</h2>
            <br/>
            <br/>
              <Col md="12">
              <Row>
                <Col md="6">
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label style={{fontWeight:500}}>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{fontWeight:500}}>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label style={{fontWeight:500}}>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" >
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
                </Col>
                <Col></Col>
                <Col>
                <div className="">
                    <div>
                      <h4 className="title" style={{fontSize:"15px", fontWeight:600, textAlign:"right"}}>
                      <i className="nc-icon nc-mobile" style={{marginRight:"2px"}}/>Give us a ring / mail</h4>
                      <p style={{fontWeight:600, fontSize:"14px", textAlign:"right"}}>
                        Nagy Studios <br />
                        +233 26 534 5999 <br />
                        +233 24 550 3481 <br />              
                        nagystudios@gmail.com
                      </p>
                    </div>
                  </div>
                </Col>
                
              </Row>
                
              </Col>
            </Row>
          </Container>
        </div>

      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
