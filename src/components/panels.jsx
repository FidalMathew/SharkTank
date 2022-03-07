import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';

function Panel() {
        return (
            <div className='panel'>
                <Container fluid>
                    <Row className="division">
                        <Col>
                            <h3>Beach</h3>
                        </Col>
                        <Col>
                            <h3>Video Footage</h3>
                        </Col>
                    </Row>
                    <Row className="division">
                        {/* Panel-1: Beach */}
                        <Col id="beach">
                            <img src={require("../assets/beach_photo.jpeg")} id="beach_img"></img>
                            <input type="image" name="buoy1" src={require("../assets/buoy.png")} className="buoy" id="num_1"></input>
                            <input type="image" name="buoy2" src={require("../assets/buoy.png")} className="buoy" id="num_2"></input>
                            <input type="image" name="buoy3" src={require("../assets/buoy.png")} className="buoy" id="num_3"></input>
                            <input type="image" name="buoy4" src={require("../assets/buoy.png")} className="buoy" id="num_4"></input>
                        </Col>
                        {/* Panel-2: Videos */}
                        <Col id="videos">
                            <Row>
                                <Col id="video1">
                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                </Col>
                                <Col id="video2">
                                
                                </Col>
                            </Row>
                            <Row>
                                <Col id="video3">
                                
                                </Col>
                                <Col id="video4"> 
                                
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
}

export default Panel;