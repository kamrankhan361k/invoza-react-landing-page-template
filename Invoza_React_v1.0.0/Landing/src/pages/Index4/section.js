import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import bg1 from "../../assets/images/bg-1.png";
import homeImg from "../../assets/images/home-img.png";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section" id="home" style={{ background: `url(${bg1}) center center` }}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="hero-wrapper mb-4">
                                    <p className="font-16 text-uppercase">Discover Invoza Today</p>
                                    <h1 className="hero-title mb-4">Make your Site Amazing & Unique with <span className="text-primary">Invoza</span></h1>

                                    <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started</Link>
                                        <Link to="#" className="btn btn-success mt-2 mr-2 ml-1">Learn more</Link>
                                    </div>
                                </div>

                            </Col>

                            <Col lg={6} sm={8}>
                                <div className="mt-5 mt-lg-0">
                                    <img src={homeImg} alt="" className="img-fluid mx-auto d-block" />
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