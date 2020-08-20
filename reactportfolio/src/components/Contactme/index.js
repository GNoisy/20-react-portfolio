import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';






function Contactme() {

    return(
        <IconContext.Provider value={{ size: "3em" }}>
        <div>
            <Jumbotron fluid className="bg-white">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h1 className="text-center mt-5" id="contact-me">Let's Chat</h1>
                    </Col>
                    <Col md={3}></Col>
                </Row>

                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        {/* <p className="text-center pt-0" id="sub-head">
                        Full Stack Web Developer
                        </p> */}

                        {/* <Image src="./me.jpeg" roundedCircle className="mx-auto d-block py-3"/> */}

                        {/* <FaGithub />
                        <FaLinkedin /> */}

                        {/* <div className="mx-auto d-block">
                            <FaEnvelope /><span id="email"  className="ml-1">gnoisy77@gmail.com</span>
                        </div>
                        <div className="mx-auto d-block">
                            <FaPhone /><span id="cel"  className="ml-1">714.376.1466</span>
                        </div> */}

                        <p id="email" className="text-center mb-0">email: GNOISY77@GMAIL</p> <p id="cel" className="text-center">cel: 714-376-1466</p>
                        <p className="text-center"><a href="https://github.com/GNoisy"><FaGithub className="mx-auto d-inline"/></a><a href="https://www.linkedin.com/in/giovanni-noisy-04098989/"><FaLinkedin className="mx-auto d-inline"/></a></p>
                        
                        
                                
                    </Col>
                    <Col md={3}></Col>

                </Row>
                
                
                
            </Container>
        </Jumbotron>
            
        </div>
        </IconContext.Provider>
    )
}

export default Contactme;