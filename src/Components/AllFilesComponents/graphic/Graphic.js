import React from "react";
import 'animate.css'
import "./Graphic.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Graphic() {

    const Navigation = useNavigate()
    const [GraphicDta, setGraphicDta] = useState([])
    const [filterData, setFilterData] = useState([])


    async function graphicDataGet() {
        try {
            const GetApi = await fetch("https://protfoliosever-fscknvyj.b4a.run//api/Graphic/graphicGetWork")
            const serverResponse = await GetApi.json()
            console.log(serverResponse)
            setGraphicDta(serverResponse.dataFind)
            setFilterData(serverResponse.dataFind)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        graphicDataGet()
    }, [])

    function Brand(cat) {
        let checck = filterData.filter((item) => item.category == cat)
        console.log(checck)

        setGraphicDta(checck)
    }


    return <>
        <div className=" container">
            <h1 className="Projectsgraph animate__animated animate__swing">My Graphic Designing Projects</h1>

            <div className="btnS-parent">

                <button onClick={() => setGraphicDta(filterData)} className="btnss">ALL</button>

                <button onClick={() => Brand("brand")} className="btnss">Brand Design</button>

                <button onClick={() => Brand("logo")} className="btnss">Logo Design</button>

                <button onClick={() => Brand("flyer")} className="btnss">Flyer Design</button>

                <button onClick={() => Brand("poster")} className="btnss">Social Media Poster</button>

                <button onClick={() => Brand("business")} className="btnss">Business Cards</button>

            </div>

            <div className="Image-parent">

                {GraphicDta.map((item) => <>
                    <div className="imagesss">
                        <img onClick={() => Navigation(`/Protfolio/${item._id}/GraphicDetail`)} src={item.img} />
                    </div>
                </>)}

            </div>




        </div>

    </>
}

export default Graphic;