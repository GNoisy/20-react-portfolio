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
                                <Card.Text className="text-center">
                                This application is built using Javascript, HTML and CSS.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="https://github.com/GNoisy/03-password-generator">Github</Card.Link>
                                <Card.Link href="https://gnoisy.github.io/03-password-generator/">Deployed Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img02.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Scheduler</Card.Title>
                                <Card.Text className="text-center">
                                This application is built using Javascript, Moment.js and JQuery.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="https://github.com/GNoisy/05-work-day-scheduler">Github</Card.Link>
                                <Card.Link href="https://gnoisy.github.io/05-work-day-scheduler/">Deployed Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img03.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Weather Forecast</Card.Title>
                                <Card.Text className="text-center">
                                This application is built using OpenWeather API and Javascript.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="https://github.com/GNoisy/06-weather-dashboard">Github</Card.Link>
                                <Card.Link href="https://gnoisy.github.io/06-weather-dashboard/">Deployed Site</Card.Link>
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
                                <Card.Text className="text-center">
                                This application is built using Node.js and Express.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="https://github.com/GNoisy/11-note-taker">Github</Card.Link>
                                <Card.Link href="https://infinite-depths-00124.herokuapp.com/">Deployed Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img05.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Shoppinator</Card.Title>
                                <Card.Text className="text-center">
                                This application is built using RapidAPI, Axios and Semantic UI.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="https://github.com/GNoisy/Shoppinator">Github</Card.Link>
                                <Card.Link href="https://shambhawi13.github.io/Shoppinator/">Deployed Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card className="shadow-lg p-3 mb-5 border-0 rounded-0">
                            <Card.Img className="border-bottom" variant="top" src="./img06.png" />
                            <Card.Body>
                                <Card.Title className="text-center">Budget Buddy</Card.Title>
                                <Card.Text className="text-center">
                                This application is built using Handlebars, Sequelize and Firebase.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="mx-auto">
                                <Card.Link href="https://github.com/GNoisy/budget-buddy">Github</Card.Link>
                                <Card.Link href="https://agile-retreat-52176.herokuapp.com/">Deployed Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;