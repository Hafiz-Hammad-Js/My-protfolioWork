import React from "react";
import './Resume.css'
import { useNavigate } from "react-router-dom";


function Resume() {

const navigation =useNavigate()
    return <>

        <div className="container">
            <h1 className="Resume-Check">Checkout My Resume</h1>

            <div className="container  Resume-parent">
                <div className="img-work-parent">
                    <div className="Img-parent-resume">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGcALhIf4kszg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727769142463?e=1733961600&v=beta&t=7h1ws7P0_64dPu0pqTUXfAD1uEf05ZGEAUEB0cOvuBM" />
                    </div>
                </div>
                <h1 className="my-name">Hafiz Hammad</h1>
                <p className="my-heading-para">
                    MERN Stack Developer | Web Designer | Brand Designer | React Native Developer | Transforming Ideas into Engaging Digital Experiences
                </p>
                <div className="bttn-pranet-resume">
                    <button onClick={function(){
                        navigation("/Contact")
                    }} className="btnss"><i class="fa-solid fa-list-check"></i> Project Discuss</button>
                </div>

            </div>

        </div>


    </>
}


export default Resume;