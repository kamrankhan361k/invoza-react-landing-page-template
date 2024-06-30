import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Button, Label, Card } from "reactstrap";


//Import Images
import bg1 from "../../assets/images/bg-1.png";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section-2" id="home" style={{ background: `url(${bg1}) center center` }}>
                    <Container>
                        <Row className="vertical-content justify-content-center">
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

                            <Col lg={{ size: 4, offset: 2 }}>
                                <Card className="mx-auto p-4 rounded mt-5 mt-lg-0">
                                    <div className="text-center">
                                        <p className="text-muted mb-2 font-13 text-uppercase">Welcome To Invoza</p>
                                        <h5 className="form-title mb-4">Get 30 Days Free Trial</h5>
                                    </div>
                                    <Form className="registration-form">
                                        <FormGroup className="mb-4">
                                            <Label className="font-15">Your Name*</Label>
                                            <Input type="text" className="form-control" id="name" placeholder="" required />
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label className="font-15">Your Email*</Label>
                                            <Input type="email" className="form-control" id="email" placeholder="" required />
                                        </FormGroup>
                                        <FormGroup className="mb-3">
                                            <Label className="font-15">Password*</Label>
                                            <Input type="password" className="form-control" id="password" placeholder="" required />
                                        </FormGroup>
                                        <Button type="submit" color="primary" size="sm" block>Get Started <i className="mdi mdi-telegram ml-2"></i></Button>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;