import React, { useEffect, useState } from "react";
import "./About.css"
import "animate.css"
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Certificate from "../Certificates/Certificate";
import { useNavigate } from "react-router-dom";


function About() {

    const navigate = useNavigate()

    const [aboutdata, setAboutData] = useState({ dataFind: [0] })

    async function aboutGetDATA (){
        const aboutGetApi = await fetch("https://protfoliosever-fscknvyj.b4a.run/api/About/get")
        const serverResponse =await aboutGetApi.json()
        console.log(serverResponse)
        setAboutData(serverResponse)
    }

    useEffect(()=>{
        aboutGetDATA()
    },[])
    
  

    return <>

        <div className="container">
            <h1 className="head animate__animated animate__swing">About <span className="sp-head">Me</span></h1>

            <div className="parent-About">
                <div className="About-childOne">
                    <img src={aboutdata.dataFind[0].cvImg} />
                </div>

                <div className="About-childTwo">
                    <div className="sub-childOne">
                        <table>
                            <tr>
                                <th className="th-work">Birthday :</th>
                                <td className="td-work">28/10/2006</td>
                            </tr>
                            <tr>
                                <th className="th-work">Phone :</th>
                                <td className="td-work">+92 334 1772 369</td>
                            </tr>
                            <tr>
                                <th className="th-work">City :</th>
                                <td className="td-work">Karachi,Pakistan</td>
                            </tr>
                        </table>
                    </div>
                    <div className="sub-childTwo">
                        <table>
                            <tr>
                                <th className="th-work">Degree :</th>
                                <td className="td-work">{aboutdata.dataFind[0].degree}</td>
                            </tr>
                            <tr>
                                <th className="th-work">Email :</th>
                                <td className="td-work"><a href={aboutdata.dataFind[0].email}>hammad@info.com</a></td>
                            </tr>
                            <tr>
                                <th className="th-work">{aboutdata.dataFind[0].lastestKey}</th>
                                <td className="td-work">{aboutdata.dataFind[0].LastestValue}</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>

            <section className="mt-5">
                <div className="sec-ChildOne">
                    <p>
                        I am an experienced MERN stack developer, mobile application developer, and brand designer with a diverse skill set that spans across modern web technologies and creative design. My journey began with a strong technical foundation, completing the MERN stack and mobile app development courses at <b style={{ color: '#efae02' }}>Expertizo University</b>, where I honed my skills in building dynamic, full-stack web and mobile applications.
                    </p>
                    <p>
                        In addition to my technical expertise, I pursued my passion for design through a brand designing course at <b style={{ color: '#efae02' }}>Arena Multimedia.</b> This has equipped me with the creative insight to craft visually compelling and strategically aligned brand identities.
                    </p>
                    <p>
                        By merging my proficiency in coding with my eye for design, I am able to create end-to-end solutions that not only function smoothly but also engage users visually and intuitively. Whether it’s developing powerful web platforms, crafting mobile apps, or building brand identities, I focus on delivering results that meet business goals and user expectations.
                    </p>
                    <p>
                        With a commitment to learning and evolving with the latest trends and technologies, I’m excited to take on new challenges and create digital experiences that make a lasting impact.
                    </p>
                </div>
                <div className="sec-ChildTow">
                    <img src={aboutdata.dataFind[0].aboutImg} />
                </div>
            </section>
            <div className="bbtn-parent">
                <button onClick={() => navigate('/Contact')} className="btttn">Contact Me</button>
            </div>

            <Education />
            <Experience />
            <Certificate />

        </div>

    </>
}

export default About