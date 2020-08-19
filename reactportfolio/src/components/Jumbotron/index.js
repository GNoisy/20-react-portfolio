import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
// import Image from 'react-bootstrap/Image'
import "./style.css";

function Hero() {
    return (
        <Jumbotron fluid className="bg-white">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h1 className="text-center mt-5" id="my-name">Hello, I'm Gio</h1>
                    </Col>
                    <Col md={3}></Col>
                </Row>

                <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <p className="text-center pt-0" id="sub-head">
                    Full Stack Web Developer
                    </p>
                    
                              
                </Col>
                <Col md={3}></Col>

                </Row>
                
                
                
            </Container>
            {/* <img src="./background-02.jpg"></img> */}
            {/* <Image src="./background-02.jpg" fluid  /> */}
        </Jumbotron>
        // <div>
        //     <div className="hero text-center" style={{ backgroundImage: "url(./background-02.jpg)" }}
        //     >
        //         <div className="p-logo">
        //             <a href="#"><img id="logo" src="./logo-01.png" alt="" /></a>
        //             <p class="center-align white-text name">GIOVANNI NOISY</p>
        //             <p class="center-align blue-text text-lighten-4 title">FULL STACK WEB DEVELOPER</p>
        //             <div class="container">
        //                 <div class="row">
        //                     <div class="col s12 icons">
        //                         <a href="https://github.com/GNoisy"><i class="fab fa-github fa-2x git-icon"></i></a>
        //                         <a href="https://www.linkedin.com/in/giovanni-noisy-04098989/"><i class="fab fa-linkedin fa-2x li-icon"></i></a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
  }
  
  export default Hero;