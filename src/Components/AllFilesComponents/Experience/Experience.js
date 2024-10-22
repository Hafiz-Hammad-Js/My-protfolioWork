import React, { useEffect, useState } from "react";
import './Experience.css'
import 'animate.css'

function Experience() {

    const [exprienceData, setExprienceData] = useState({ dataFind: [] })


    async function exprienceDataGet() {
        try {
            const exprienceGetApi = await fetch("https://protfoliosever-fscknvyj.b4a.run//api/Exprience/ExprienceGetWork")
            const serverResponse = await exprienceGetApi.json()
            console.log(serverResponse)
            setExprienceData(serverResponse)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        exprienceDataGet()
    },[])
    

 


    return <>

        <h1 className="container head-Experience animate__animated animate__swing">Experience</h1>
        {exprienceData.dataFind.map((item)=><>
        
            <div className="container Experience-parent">
            <div className="child-parent">
                <div className="childOne-child-parent">
                    <div className="company-parent">
                        <div className="img-parentExperienec">
                            <img src={item.logoImg} />
                        </div>
                        <div>
                            <h1 className="company-name">{item.companyName}</h1>
                            <h1 className="company-location"><i class="fa-solid fa-location-dot"></i> Karachi,Pakistan</h1>
                        </div>
                    </div>
                    <div className="subling">
                        <h3 className="head-subling">{item.exprience}</h3>
                    </div>
                </div>
                <div className="childTow-child-parent">
                    <div className="logo-img-parent">
                        <img src={item.skillImg} />
                    </div>
                    <h1 className="GD">{item.skillName}</h1>
                </div>
            </div>
        </div>
        
        </>)}
        
    </>
}

export default Experience;