import React from "react";
import "../Navbar/Navbar.css"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar() {

    const navigation = useNavigate()
    const [NavbarData, setNavbarData] = useState({ dataFind: [] })


    async function NavbarGetData() {
        try {
            const getImgApi = await fetch("https://protfoliosever-fscknvyj.b4a.run//api/Navbar/NavbarGetWork")
            const serverResponse = await getImgApi.json()
            console.log(serverResponse)
            setNavbarData(serverResponse)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        NavbarGetData()
    }, [])

    return <>

        <nav class="container navbar navbar-expand-lg">
            <div class="container">
                <div className="logo-parent">

                    <div className="logo-div me-2">
                        {NavbarData.dataFind.map((item)=><>
                          <img src={item.img}/>
                        </>)}
                    </div>

                    <h4>Hammad's Portfolio</h4>
                </div>
                <button class="toogle-work navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fa-solid fa-bars-staggered"></i></span>
                </button>
                <div class="check-link collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={() => navigation("/")}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={() => navigation("/About")}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={() => navigation("/Skills")}>Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={() => navigation("/Protfolio")}>Protfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={() => navigation("/Contact")}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>

}

export default Navbar;