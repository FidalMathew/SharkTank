import React from 'react'
import '../styles/index.css';
import '../styles/about.css';
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

const data = {
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
        {
            label: "Attacks",
            data: [98, 91, 88, 66, 64, 57, 63],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Fatalities",
            data: [6, 4, 5, 5, 2, 10, 11],
            fill: false,
            borderColor: "#742774"
        }
    ]
};

function setData(arrData, labels) {
    let data = {
        maintainAspectRatio: false,
        responsive: true,
        labels: labels,
        textAlign: "right",
        datasets: [
            {
                data: arrData,
                backgroundColor: ["blue", "red", "green", "orange", "yellow"],
                // hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            }
        ]
    };
    return data;
}

// template of options

function setTitle(string) {
    let options = {
        aspectRatio: 1,
        plugins: {
            legend: {
                display: true,
                position: "right"
            },
            title: {
                display: true,
                text: string,
                align: "center",
                padding: {
                    top: 50,
                },
                color: "black",
                font: {
                    weight: "bold",
                    size: 25
                }
            }
        },
        elements: {
            arc: {
                borderWidth: 3,
            }
        }
    };
    return options;
}


function About() {
    return (
        <div className='panel' id="stats">
            <div className='inside'>


                <div className="content">
                    <div className="info">
                        <h1>About </h1>
                        The stream being recorded by the camera underwater is fed to the ML model to detect the particular species.The fact that cold blooded species have weak vision, strong sense of smell and hearing has been exploited to the benefit of humans by luring them towards “prey” sensed by the species for which we create the appropriate scene by using our blood bank and decoy speakers. The system developed acts as a detector and as an alerting mechanism which helps in providing the human (who’s prone to get attacked) some time to get to the safe zone.    </div>
                    <div className="chart">
                        <Pie data={setData([60, 13, 9, 6, 6], ["Florida", "Hawaii", "South Carolina", "North Carolina", "Georgia"])} options={setTitle("Shark Attacks")} />
                    </div>
                </div>
                <div style={{ padding: "5px 10rem 10px 10rem" }}>

                    <Line data={data} />
                </div>
            </div>
        </div>
    )
}

export default About;