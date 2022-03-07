import React, { useState } from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
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
            <div className="inside">
            <Container fluid>

                <Row className="desktop">
                    <Col>
                        <h1>Buoys</h1>
                    </Col>
                    <Col>
                        <h1>LiveStream</h1>
                    </Col>
                </Row>


            <Row>
                <h1 className="mobile">Buoys</h1>
                <Col md={6} style={{ backgroundImage: `url(${background})` }} className="div">
                    <div className="beach">
                        <figure>
                            <input type="image" src={require("../assets/buoy.png")} className="buoy" value={1} onClick={(e) => toggle(e)}></input>
                            <figcaption><p>Buoy-1</p></figcaption>
                        </figure>
                        <figure>
                            <input type="image" src={require("../assets/buoy.png")} className="buoy" value={2} onClick={(e) => toggle(e)}></input>
                            <figcaption><p>Buoy-2</p></figcaption>
                        </figure>
                        <figure>
                            <input type="image" src={require("../assets/buoy.png")} className="buoy" value={3} onClick={(e) => toggle(e)}></input>
                            <figcaption><p>Buoy-3</p></figcaption>
                        </figure>
                        <figure>
                            <input type="image" src={require("../assets/buoy.png")} className="buoy" value={4} onClick={(e) => toggle(e)}></input>
                            <figcaption><p>Buoy-4</p></figcaption>
                        </figure>
                    </div>
                </Col>

                <h1 className='mobile'>LiveStream</h1>
                <Col md={6}>
                    {
                        !buoy1 && !buoy2 && !buoy3 && !buoy4 ?
                            <Row className="div">
                                <Col xs={6} className="video">
                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                </Col>
                                <Col xs={6} className="video">
                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                </Col>
                                <Col xs={6} className="video">
                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                </Col>
                                <Col xs={6} className="video">
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
            </div>
        </div >
    );
}

export default Panel;