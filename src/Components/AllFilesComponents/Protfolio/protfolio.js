import React, { useState, useEffect } from "react";
import 'animate.css'
import "./Protfolio.css"
import Graphic from "../graphic/Graphic";


function Protfolio() {

    const [webData, setWebData] = useState({ dataFind: [] })

    async function WebProtfolioDataGet() {
        try {
            const WebGetApi = await fetch("https://protfoliosever-fscknvyj.b4a.run//api/Web/WebProtfolioGetWork")
            const serverResponse = await WebGetApi.json()
            console.log(serverResponse)
            setWebData(serverResponse)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        WebProtfolioDataGet()
    }, [])




    return <>
        <div className="container">
            <h1 className="ProjectsHead animate__animated animate__swing">Projects I have worked On</h1>


            {webData.dataFind.map((item) => <>
                <div className="protfolio-parent">

                    <div className="protfolio-childOne-01">
                        <img src={item.thumImg} />
                    </div>

                    <div className="protfolio-childTow-02">
                        <h2>{item.yourProjectName}</h2>
                        <p>Worked On</p>

                        <div className="sieCate-child-01">
                            <span>{item.workedOn}</span>
                        </div>
                        <p>Technologly I have used</p>


                        <div className="tech-work">
                            {item.technologies.map((data) => <>
                                <div className="skill-parent-tect">
                                    <div className="logoImg-parent">
                                        <img src={data.logo} />
                                    </div>
                                    <h1 className="tect-name">{data.name}</h1>
                                </div>
                            </>
                            )}
                        </div >

                        <div className="link-work">
                            <a href={item.link}><i class="fa-solid fa-link"></i> Go to website</a>
                        </div>
                    </div>
                </div>

            </>)}

         

            <div className="git-btn">
                <button><i class="fa-brands fa-github"></i><a className="GIT" href="https://github.com/Hafiz-Hammad-Js">See Github</a> </button>
            </div>
            
            <Graphic />
        </div>

    </>
}

export default Protfolio;