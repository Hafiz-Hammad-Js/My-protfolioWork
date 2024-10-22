import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './GraphicDetail.css'


function GraphicDetail() {

    const { id } = useParams()
    console.log(" me aana wali Id hon ", id)

    const [detailData, setDetailData] = useState({ Data: [] })

    async function GetDetailData() {
        try {
            const singalApi = await fetch(`https://protfoliosever-fscknvyj.b4a.run//api/Graphic/${id}`)
            const serverResponse = await singalApi.json()
            console.log(serverResponse)
            setDetailData(serverResponse)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        GetDetailData()
    }, [])

    return <>


        <h1 className="Projectsgraph1 animate__animated animate__swing">My Design Detail</h1>

        {detailData.Data.map((item) => (  // Directly using map
            <div className="container detailImg-parent" key={item.id}>
                <div className="container detail-imfg-work">
                    <img src={item.img} alt={item.imgName} />
                </div>

                <div className="mydesign-work">
                    <div>
                        <h1 className="catName">{item.imgName}</h1>
                        <p className="about-grapgPara">{item.imgAbout}</p>
                    </div>

                </div>

            </div>
        ))}

    </>
}


export default GraphicDetail;