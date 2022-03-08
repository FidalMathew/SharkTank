import React from 'react'
import { Container } from 'react-bootstrap';
import '../styles/index.css';
import '../styles/about.css';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

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
        <div className='panel'>
            <div className='inside'>

                    
                    <div className="content">
                        <div className="info">
                            <h1>Why?</h1>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis fugit corrupti illum doloremque, facere dolore quia facilis quae ipsa molestiae totam culpa similique. Delectus, similique. Porro consequuntur recusandae quia quaerat ipsam nostrum architecto, maxime, in veniam excepturi officiis quas corporis.
                        </div>
                        <div className="chart">
                            <Pie data={setData([60, 13, 9, 6, 6], ["Florida", "Hawaii", "South Carolina", "North Carolina", "Georgia"])}  options={setTitle("Shark Attacks")} />
                        </div>
                    </div>
            </div></div>
    )
}

export default About;