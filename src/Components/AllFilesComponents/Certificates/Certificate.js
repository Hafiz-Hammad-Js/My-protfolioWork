import React, { useEffect, useState } from "react";
import './Certificate.css'
import 'animate.css'


function Certificate() {

    const [certificateData, setCertificateData] = useState({ dataFind: [] })

    async function certificateGetData() {
        const certificateGetApi = await fetch("https://protfoliosever-fscknvyj.b4a.run//api/Certificate/CertificateGetWork")
        const serverResponse = await certificateGetApi.json()
        console.log(serverResponse)
        setCertificateData(serverResponse)
    }

    useEffect(() => {
        certificateGetData()
    }, [])

    function certificatePDF(index) {

        window.open(certificateData.dataFind[index].pdfFile)

    }



    return <>
        <div className="container ">
            <h1 className="head-ke animate__animated animate__swing">Certificates</h1>

            <div className="parent-certificatess">

                {certificateData.dataFind.map((item ,index) => <>
                    <div className="Certificate-parent">
                        <div className="header-certificates">
                            <div className="certificates-childOne">
                                <div className="logo-certificateParent">
                                    <div className="logo-certificates">
                                        <img src={item.coachingLogo} />
                                    </div>
                                    <h2 className="expertizo">{item.coachingName}</h2>
                                </div>
                            </div>
                            <ul className="heading">
                                <li>{item.courseName}</li>
                            </ul>

                            {item.pdfFile == "" || !item.pdfFile
                                ?
                                <div className="Viwe1">
                                    <i class="fa-solid fa-eye"></i><b> Coming Soon</b>
                                </div>
                                :
                                <div onClick={() => certificatePDF(index)} className="Viwe">
                                    <i class="fa-solid fa-eye"></i><b >Viwe</b>
                                </div>
                            }
                        </div>
                    </div>

                </>)}

            </div>





        </div>
    </>
}
export default Certificate;

