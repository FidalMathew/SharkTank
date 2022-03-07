import React, { useState } from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import background from "../assets/beach_photo.jpeg";

import { Container, Row, Col } from 'react-bootstrap';

function Panel() {

    const [buoy1, setBouy1] = useState(false);
    const [buoy2, setBouy2] = useState(false);
    const [buoy3, setBouy3] = useState(false);
    const [buoy4, setBouy4] = useState(false);

    const toggle = (e) => {
        let num = (e.target.value);

        if (num == 1) {
            setBouy1(!buoy1);

        }
        else if (num == 2) {
            setBouy2(!buoy2);
        }
        else if (num == 3) {
            setBouy3(!buoy3);
        }
        else if (num == 4) {
            setBouy4(!buoy4);
        }

    }


    return (
        <div className='panel'>
            <Container fluid>

                <Row className="division">

                    <h3>Beach</h3>
                    <Col md={6} style={{ backgroundImage: `url(${background})` }}>


                        <input type="image" src={require("../assets/buoy.png")} className="buoy" id="num_1" value={1} onClick={(e) => toggle(e)}></input>
                        <input type="image" src={require("../assets/buoy.png")} className="buoy" id="num_2" value={2} onClick={(e) => toggle(e)}></input>
                        <input type="image" src={require("../assets/buoy.png")} className="buoy" id="num_3" value={3} onClick={(e) => toggle(e)}></input>
                        <input type="image" src={require("../assets/buoy.png")} className="buoy" id="num_4" value={4} onClick={(e) => toggle(e)}></input>

                    </Col>

                    <Col style={{ height: "100px" }}>
                        <h3>LiveStream</h3>
                        {
                            !buoy1 && !buoy2 && !buoy3 && !buoy4 ?
                                <Row>

                                    <Col xs={6} >
                                        <img src={require("../assets/water.gif")} width={'100%'}></img>
                                    </Col>

                                    <Col xs={6}>
                                        <img src={require("../assets/water.gif")} width={'100%'}></img>
                                    </Col>
                                    <Col xs={6} >
                                        <img src={require("../assets/water.gif")} width={'100%'}></img>
                                    </Col>
                                    <Col xs={6} >
                                        <img src={require("../assets/water.gif")} width={'100%'}></img>
                                    </Col>

                                </Row>
                                :
                                <Row>
                                    {
                                        buoy1 && <Col  >
                                            <img src={require("../assets/water.gif")} width={'100%'}></img>
                                        </Col>
                                        ||
                                        buoy2 && <Col  >
                                            <img src={require("../assets/water.gif")} width={'100%'}></img>
                                        </Col>
                                        ||
                                        buoy3 && <Col  >
                                            <img src={require("../assets/water.gif")} width={'100%'}></img>
                                        </Col>
                                        ||
                                        buoy4 && <Col  >
                                            <img src={require("../assets/water.gif")} width={'100%'}></img>
                                        </Col>
                                    }
                                </Row>

                        }

                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Panel;