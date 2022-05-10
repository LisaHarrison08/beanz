import React from "react"
import coffee from "../assets/coffee-cup.jpg"
import barista from "../assets/barista.jpg"
import Fade from "react-reveal";
import { Container, Col, Row } from 'react-bootstrap'


function About() {
    return (
        <section id="about">
                <Container>
                    <Row>
                    <Fade left duration={1000} distance="500px">
                        <Col>
                            <img
                                className="about-us"
                                src={barista}
                                alt="Barista"
                            />
                        </Col>
                        </Fade>
                        <Fade right duration={1000} distance="500px">
                        <Col className="about-us">
                            <img
                                className="about-pic"
                                src={coffee}
                                alt="Coffee Cup"
                            />
                        </Col>
                        </Fade>
                    </Row>
                </Container>
        </section >
    );
}

export default About;