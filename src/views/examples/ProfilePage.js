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
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container style={{marginTop:"40px"}}>
          <Row>
            <h2 className="title text-center" style={{fontWeight:600, borderBottom:"0.25em solid #6C4BF4", textAlign:"center"}}>About Me</h2>
          <Col md="12">
            <Row>
              <Col md="12" xs="12" sm="12">
              <Row>
              <Col md="6" sm="12" xs="12">
              <Card>
              <CardImg width="100%" src={require("assets/img/profile1.jpeg")} alt="Card image cap" />
              </Card>
            </Col>
            <Col md="6" sm="12" xs="12">
            <Row>
              <Col>
              <div className="owner" style={{textAlign:"left"}}>
                <div className="name">
                  <h4 className="title" style={{fontWeight:600}}>
                    Jesse Appiah <br />
                  </h4>
                  <h6 className="description">Professional Nurse, Graphic Designer and A Creative Director.</h6>
                </div>
              </div>
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
              </p>
              <br />
              </Col>
            </Row>
              <Row>
                <Col >
                  <h4 className="info-text"><span><i className="fa fa-birthday-cake" style={{marginRight:"10px", color:"skyblue"}}/></span>Birthday : <span>11/97</span></h4>
                </Col>
                <Col >
                  <h4 className="info-text"><span><i className="fa fa-envelope" style={{marginRight:"10px", color:"skyblue"}}/></span>Email : <span>appiajesse@gmail.com</span></h4>
                </Col>
              </Row>
              <Row>
                <Col >
                  <h4 className="info-text"><span><i className="fa fa-phone" style={{marginRight:"10px", color:"skyblue"}}/></span>Phone : <span>+233265345999</span></h4>
                </Col>
                <Col >
                  <h4 className="info-text"><span><i className="fa fa-whatsapp" style={{marginRight:"10px", color:"skyblue"}}/></span>Whatsapp : <span>+233265345999</span></h4>
                </Col>
              </Row>
              <Row>
                <Col >
                  <h4 className="info-text"><span><i className="fa fa-home" style={{marginRight:"10px", color:"skyblue"}}/></span>City : <span>Takoradi</span></h4>
                </Col>
                <Col >
                  <h4 className="info-text"><span><i className="fa fa-chrome" style={{marginRight:"10px", color:"skyblue"}}/></span>Website : <span>nagystudios.com</span></h4>
                </Col>
              </Row>
              <br/>
              <br/>
              <Row>
                <Col>
                  <Button style={{backgroundColor:"#6C4BF4",borderColor:"#6C4BF4"}}>
                    Download CV
                  </Button>
                </Col>
              </Row>
            </Col>
            </Row>
              </Col>
            </Row>
            </Col>
          </Row>
          <Row>
            <h2 className="title text-center" style={{fontWeight:600, borderBottom:"0.25em solid #6C4BF4", textAlign:"center"}}>Resume</h2>
            
            <Col md="12">
            <Row>
              <Col md="6">
              <Card className="card-plain shadow" style={{borderLeft:"0.4em solid #6C4BF4"}}>
                <CardBody style={{marginLeft:"20px"}}>
                  <h4 style={{fontWeight:"bold", fontSize:"14px"}}>Graphics Design</h4>
                  <p style={{fontWeight:500, fontSize:"13px"}}><i className="fa fa-map-marker"/>Ghana Tech Lab (ICODE-Takoradi).</p>
                  <p style={{fontWeight:600, fontSize:"13px"}}>HTML and CSS (Front end), Adobe XD (Ui, Ux), React, Phyton, Business Strategy and Marketing.</p>
                </CardBody>
              </Card>
              </Col>
              <Col md="6">
              <Card className="card-plain shadow" style={{borderLeft:"0.4em solid #6C4BF4"}}>
                <CardBody style={{marginLeft:"20px"}}>
                  <h4 style={{fontWeight:"bold", fontSize:"14px"}}>Graphics Design</h4>
                  <p style={{fontWeight:500, fontSize:"13px"}}><i className="fa fa-map-marker"/>Ghana Tech Lab (ICODE-Takoradi).</p>
                  <p style={{fontWeight:600, fontSize:"13px"}}>HTML and CSS (Front end), Adobe XD (Ui, Ux), React, Phyton, Business Strategy and Marketing.</p>
                </CardBody>
              </Card>
              </Col>
              <Col md="6">
              <Card className="card-plain shadow" style={{borderLeft:"0.4em solid #6C4BF4"}}>
                <CardBody style={{marginLeft:"20px"}}>
                  <h4 style={{fontWeight:"bold", fontSize:"14px"}}>Graphics Design</h4>
                  <p style={{fontWeight:500, fontSize:"13px"}}><i className="fa fa-map-marker"/>Ghana Tech Lab (ICODE-Takoradi).</p>
                  <p style={{fontWeight:600, fontSize:"13px"}}>HTML and CSS (Front end), Adobe XD (Ui, Ux), React, Phyton, Business Strategy and Marketing.</p>
                </CardBody>
              </Card>
              </Col>
              <Col md="6">
              <Card className="card-plain shadow" style={{borderLeft:"0.4em solid #6C4BF4"}}>
                <CardBody style={{marginLeft:"20px"}}>
                  <h4 style={{fontWeight:"bold", fontSize:"14px"}}>Graphics Design</h4>
                  <p style={{fontWeight:500, fontSize:"13px"}}><i className="fa fa-map-marker"/>Ghana Tech Lab (ICODE-Takoradi).</p>
                  <p style={{fontWeight:600, fontSize:"13px"}}>HTML and CSS (Front end), Adobe XD (Ui, Ux), React, Phyton, Business Strategy and Marketing.</p>
                </CardBody>
              </Card>
              </Col>
              <Col md="6">
              <Card className="card-plain shadow" style={{borderLeft:"0.4em solid #6C4BF4"}}>
                <CardBody style={{marginLeft:"20px"}}>
                  <h4 style={{fontWeight:"bold", fontSize:"14px"}}>Graphics Design</h4>
                  <p style={{fontWeight:500, fontSize:"13px"}}><i className="fa fa-map-marker"/>Ghana Tech Lab (ICODE-Takoradi).</p>
                  <p style={{fontWeight:600, fontSize:"13px"}}>HTML and CSS (Front end), Adobe XD (Ui, Ux), React, Phyton, Business Strategy and Marketing.</p>
                </CardBody>
              </Card>
              </Col>
              <Col md="6">
              <Card className="card-plain shadow" style={{borderLeft:"0.4em solid #6C4BF4"}}>
                <CardBody style={{marginLeft:"20px"}}>
                  <h4 style={{fontWeight:"bold", fontSize:"14px"}}>Graphics Design</h4>
                  <p style={{fontWeight:500, fontSize:"13px"}}><i className="fa fa-map-marker"/>Ghana Tech Lab (ICODE-Takoradi).</p>
                  <p style={{fontWeight:600, fontSize:"13px"}}>HTML and CSS (Front end), Adobe XD (Ui, Ux), React, Phyton, Business Strategy and Marketing.</p>
                </CardBody>
              </Card>
              </Col>
            </Row>
             
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
