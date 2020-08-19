import React from "react";
import Hero from "../components/Jumbotron"
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Home() {

    return(
        <div>
            <Hero />
            
            <Container>

                <br/>
                <br/>
                <br/>
                <br/>
                
                <Row>
                    <Col>
                        <p className="text-center lead mb-4">( Recent Projects )</p>
                    </Col>
                </Row>

                <Row >
                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img01.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Password Generator</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img02.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Scheduler</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img03.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Weather Forecast</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row >
                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img04.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Note Taker</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img05.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Shoppinator</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img06.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Budget Buddy</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;