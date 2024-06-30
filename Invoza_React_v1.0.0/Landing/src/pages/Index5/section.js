import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import bg1 from "../../assets/images/bg.jpg";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section-5" id="home" style={{ background: `url(${bg1})` }}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <div className="hero-wrapper text-center mb-4">
                                    <p className="font-16 text-uppercase text-white-50">Discover Invoza Today</p>
                                    <h1 className="hero-title text-white mb-4">Make your Site Amazing & Unique with <span className="text-primary">Invoza</span></h1>

                                    <p className="text-white-50">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started</Link>
                                        <Link to="#" className="btn btn-success mt-2 mr-2 ml-1">Learn more</Link>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;