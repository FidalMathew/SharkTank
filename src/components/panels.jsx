import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import background from "../assets/beach_photo.png";

import { Container, Row, Col } from 'react-bootstrap';

function Panel() {

    const [time, setTime] = useState(new Date());


    const [buoy1, setBouy1] = useState(false);
    const [buoy2, setBouy2] = useState(false);
    const [buoy3, setBouy3] = useState(false);
    const [buoy4, setBouy4] = useState(false);


    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

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
        <div className='panel' id="home">
            <div className="inside">
                <Container fluid>
                    <Row>
                        <Col md={6} className="div">
                            <h1 style={{ textAlign: "center" }}>Buoys</h1>
                            <div style={{ backgroundImage: `url(${background})`, position: 'relative', height: "25rem", backgroundSize: "120%", backgroundRepeat: `no-repeat` }} >


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
                                <div style={{
                                    position: "absolute",
                                    bottom: "4.3rem",
                                    right: "1rem"
                                }}> Marina Beach </div>
                                <div style={{ textAlign: "center", marginTop: '4em' }}>
                                    <button className='btn btn-primary ' onClick={reset}>Reset Buoy Cam</button>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <h1 style={{ textAlign: "center" }}>LiveStream</h1>
                            <div className='livestream_content' style={{ backgroundColor: `black`, padding: `2%` }}>

                                <div className='text-center text-white'>{time.toLocaleString()} </div>

                                {
                                    !buoy1 && !buoy2 && !buoy3 && !buoy4 ?
                                        <Row style={{
                                            position: "relative",
                                            left: "12px",
                                            top: "4px"

                                        }}>
                                            <Col xs={6} className="video">
                                                <img src={require("../assets/water.gif")} width={'90%'}>
                                                </img>
                                                <div >buoy-1</div>
                                            </Col>
                                            <Col xs={6} className="video">
                                                <img src={require("../assets/water.gif")} width={'90%'}></img>
                                                <div >buoy-2</div>

                                            </Col>
                                            <Col xs={6} className="video">
                                                <img src={require("../assets/water.gif")} width={'90%'}></img>
                                                <div >buoy-3</div>

                                            </Col>
                                            <Col xs={6} className="video">
                                                <img src={require("../assets/water.gif")} width={'90%'}></img>
                                                <div >buoy-4</div>

                                            </Col>
                                            <div style={{ textAlign: "center", color: `white` }}> All Buoys</div>

                                        </Row>
                                        :
                                        <Row style={{ paddingTop: `10px` }}>
                                            {
                                                (buoy1 && <Col  >
                                                    <img src={require("../assets/water.gif")}
                                                        style={{
                                                            position: "relative",
                                                            left: "20px"
                                                        }}

                                                        width={'92%'}></img>
                                                    <div style={{ textAlign: "center", color: `white` }}>bouy1</div>
                                                </Col>)
                                                ||
                                                (buoy2 && <Col  >
                                                    <img src={require("../assets/water.gif")}
                                                        style={{
                                                            position: "relative",
                                                            left: "20px"
                                                        }}
                                                        width={'92%'}></img>
                                                    <div style={{ textAlign: "center", color: `white` }}>bouy2</div>

                                                </Col>)
                                                ||
                                                (buoy3 && <Col  >
                                                    <img src={require("../assets/water.gif")}

                                                        style={{
                                                            position: "relative",
                                                            left: "20px"
                                                        }}
                                                        width={'92%'}></img>
                                                    <div style={{ textAlign: "center", color: `white` }}>bouy3</div>
                                                </Col>)
                                                ||
                                                (buoy4 && <Col  >
                                                    <img src={require("../assets/water.gif")}

                                                        style={{
                                                            position: "relative",
                                                            left: "20px"
                                                        }}
                                                        width={'92%'}></img>
                                                    <div style={{ textAlign: "center", color: `white` }}> bouy4</div>
                                                </Col>)
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