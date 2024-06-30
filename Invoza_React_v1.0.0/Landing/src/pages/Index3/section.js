import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Input } from "reactstrap";

//Import Images
import bg2 from "../../assets/images/bg-2.png";


class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section-5" id="home" style={{ background: `url(${bg2}) center center` }}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <div className="hero-wrapper text-center mb-4">
                                    <p className="font-16 text-uppercase">Discover Invoza Today</p>
                                    <h1 className="hero-title mb-4">Make your Site Amazing & Unique with <span className="text-success">Invoza</span></h1>

                                    <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>

                                    <div className="text-center mt-4">
                                        <div className="subscribe">
                                            <Form>
                                                <Row>
                                                    <Col md={9}>
                                                        <div>
                                                            <Input type="text" className="form-control" placeholder="Enter your E-mail address" />
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <div className="mt-3 mt-md-0">
                                                            <Button type="submit" color="success" block>Subscribe Us</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
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