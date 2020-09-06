import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./style.css";


function Aboutme() {

    return(
        <div>
            <Jumbotron fluid className="bg-white">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h1 className="text-center mt-5" id="about-me">About Me</h1>
                    </Col>
                    <Col md={3}></Col>
                </Row>

                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        {/* <p className="text-center pt-0" id="sub-head">
                        Full Stack Web Developer
                        </p> */}
                        <Image src={require("../../images/me.jpeg")} roundedCircle className="mx-auto d-block py-3"/>
                        
                                
                    </Col>
                    <Col md={3}></Col>

                </Row>
                
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="py-5">
                    <p class="bio">
                        Hello, I'm Giovanni. I'm a Web Developer who is
                        currently enrolled in the UC Berkeley Full Stack Web
                        Development curriculum. I spent the last 15 years
                        working as a Graphic Designer in the entertainment
                        industry creating theatrical, video game, home
                        entertainment and television advertising campaigns. For
                        the last five years my focus has been in the gaming
                        industry. I've created campaigns used for marketing core
                        titles in platforms such as the Apple Store, Google
                        Play, Facebook, and Discord. Now my focus has taken to
                        me to Web Development. The ability to design as well as
                        code I think provides an invaluable asset. Delivering a
                        final product to the client beginning with initial idea,
                        to execution and final delivery is a process that can be
                        streamlined having to only deal with one contact. I'm
                        excited about developing this new skill set that I am
                        learning.

                        <br />
                        <br />

                        In my free time I enjoy being a new dad to my four
                        month old son Miles, traveling to new places, cooking
                        and eating great food with my wife Tracie, and getting
                        out to play a round of golf.
                      </p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                
            </Container>
        </Jumbotron>
            
        </div>
    )
}

export default Aboutme;