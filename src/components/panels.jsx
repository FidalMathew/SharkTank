import React, { useState } from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import background from "../assets/beach_photo.png";

import { Container, Row, Col } from 'react-bootstrap';

function Panel() {

    const [buoy1, setBouy1] = useState(false);
    const [buoy2, setBouy2] = useState(false);
    const [buoy3, setBouy3] = useState(false);
    const [buoy4, setBouy4] = useState(false);

    const toggle = (e) => {
        let num = (e.target.value);

        if (num == 1) {
            setBouy1(true);
            setBouy2(false);
            setBouy3(false);
            setBouy4(false);

        }
        else if (num == 2) {
            setBouy1(false);
            setBouy2(true);
            setBouy3(false);
            setBouy4(false);
        }
        else if (num == 3) {
            setBouy1(false);
            setBouy2(false);
            setBouy3(true);
            setBouy4(false);
        }
        else if (num == 4) {
            setBouy1(false);
            setBouy2(false);
            setBouy3(false);
            setBouy4(true);
        }

    }

    const reset = () => {
        setBouy1(false);
        setBouy2(false);
        setBouy3(false);
        setBouy4(false);

    }

    return (
        <div className='panel'>
            <div className="inside">
                <Container fluid>
                    <Row>
                        <Col md={6} className="div">
                            <h1 style={{ textAlign: "center" }}>Buoys</h1>
                            <div style={{ backgroundImage: `url(${background})`, height: "25rem", backgroundSize: "140%" }} >


                                <div className="beach">
                                    <figure>
                                        <input type="image" src={require("../assets/buoy.png")} className="buoy" value={1} onClick={(e) => toggle(e)}></input>
                                        <figcaption className="desc1"><a>Buoy-1</a></figcaption>
                                    </figure>
                                    <figure>
                                        <input type="image" src={require("../assets/buoy.png")} className="buoy" value={2} onClick={(e) => toggle(e)}></input>
                                        <figcaption><a>Buoy-2</a></figcaption>
                                    </figure>
                                    <figure>
                                        <input type="image" src={require("../assets/buoy.png")} className="buoy" value={3} onClick={(e) => toggle(e)}></input>
                                        <figcaption><a>Buoy-3</a></figcaption>
                                    </figure>
                                    <figure>
                                        <input type="image" src={require("../assets/buoy.png")} className="buoy" value={4} onClick={(e) => toggle(e)}></input>
                                        <figcaption><a>Buoy-4</a></figcaption>
                                    </figure>
                                </div>

                                <div style={{ textAlign: "center", marginTop: '3em' }}>
                                    <button className='btn btn-primary ' onClick={reset}>Reset Bouy Cam</button>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <h1 style={{ textAlign: "center" }}>LiveStream</h1>

                            <div className='livestream_content'  >


                                {
                                    !buoy1 && !buoy2 && !buoy3 && !buoy4 ?
                                        <Row >
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
                                            <div style={{ textAlign: "center" }}> All Bouys</div>

                                        </Row>
                                        :
                                        <Row>
                                            {
                                                buoy1 && <Col  >
                                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                                    <div style={{ textAlign: "center" }}>bouy1</div>
                                                </Col>
                                                ||
                                                buoy2 && <Col  >
                                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                                    <div style={{ textAlign: "center" }}>bouy2</div>

                                                </Col>
                                                ||
                                                buoy3 && <Col  >
                                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                                    <div style={{ textAlign: "center" }}>bouy3</div>
                                                </Col>
                                                ||
                                                buoy4 && <Col  >
                                                    <img src={require("../assets/water.gif")} width={'100%'}></img>
                                                    <div style={{ textAlign: "center" }}> bouy4</div>
                                                </Col>
                                            }
                                        </Row>

                                }


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
}

export default Panel;