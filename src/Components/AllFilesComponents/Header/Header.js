import React, { useEffect, useState } from "react";
import "../Header/Header.css"
import 'animate.css';



function Header() {

    const [headerData, setHeaderData] = useState([])

    async function getHeaderData() {
        try {
            const data = await fetch("https://protfoliosever-fscknvyj.b4a.run//api/Header/HeaderGetWork")
            const result = await data.json()
            setHeaderData(result.dataFind)
            console.log(result)


        } catch (error) {
            console.log("I AM ERROR", error)
        }

    }

    useEffect(() => {
        getHeaderData()
    }, [])




    return <>
        <div className="container parent-header">
            <div className="header-elent">
                <h1 className="hello-head animate__animated animate__bounce">“Hello”</h1>
                <h1 className="name-head animate__animated animate__lightSpeedInLeft">I'm <span className="spp">Hafiz Hammad</span></h1>
                <p className="para animate__animated animate__fadeInDown">
                    "MERN Stack Developer | Web Designer | Brand Designer | React Native Developer<span className="sp"> | Transforming Ideas into Engaging Digital Experiences"</span>
                </p>
                <div className="icon-parent">
                    <div>
                       <a target="black" href="https://www.linkedin.com/in/hafizhammadjs/"><i class="fa-brands fa-linkedin"></i></a> 
                    </div>
                    <div>
                        <a target="black" href="https://www.instagram.com/web_graphstudio/"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                    <div>
                        <a target="Black" href="https://www.facebook.com/profile.php?id=100009909430800"><i class="fa-brands fa-square-facebook"></i></a>
                    </div>
                    <div>
                        <a target="Black"  href="https://www.threads.net/@web_graphstudio"><i class="fa-brands fa-square-threads"></i></a>
                    </div>
                </div>
            </div>
            <div className="Child-02">
                <div className="img-parent">
                    {headerData.map((item) => <>
                        <img src={item.img} />
                    </>)}
                </div>
                <div>
                    <img className="js-icon" src="https://github.com/hafizhammad123/immggg/blob/main/WhatsApp_Image_2024-10-08_at_19.23.07_e38a14af-removebg-preview.png?raw=true" width={"40px"} />

                    <img className="html-icon" src="https://github.com/hafizhammad123/immggg/blob/main/htnl-removebg-preview.png?raw=true" width={"70px"} />

                    <img className="css-icon" src="https://github.com/hafizhammad123/immggg/blob/main/csssssss-removebg-preview%20(1).png?raw=true" width={"70px"} />

                    <img className="react-icon" src="https://github.com/hafizhammad123/immggg/blob/main/react-icon-removebg-preview.png?raw=true" width={"70px"} />


                    <img className="next-icon" src="https://github.com/hafizhammad123/immggg/blob/main/nextjs-removebg-preview.png?raw=true" width={"70px"} />

                    <img className="fire-icon" src="https://github.com/hafizhammad123/immggg/blob/main/firebase-removebg-preview.png?raw=true" width={"70px"} />

                    <img className="mongo-icon" src="https://github.com/hafizhammad123/immggg/blob/main/node-removebg-preview%20(1).png?raw=true" width={"70px"} />

                </div>

            </div>

        </div>
    </>
}
export default Header;