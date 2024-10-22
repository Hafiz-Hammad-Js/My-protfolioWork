import React from "react";
import './Education.css'
import 'animate.css'




function Education() {


    return <>
        <div className="container">
            <h1 className="head-Eduaction animate__animated animate__swing">Education</h1>

            <div className="education-parent">
                <div className="ChildOne-Eduction">
                    {/* box */}
                    <div className="matric-parent">
                        <div className="Matric">
                            <i class="fa-solid fa-school"></i>
                            <h5>Matric</h5>
                        </div>
                    </div>
                    {/* box finished*/}
                    <ul className="place-parent">
                        <li>
                            <h2 className="head-matric">Matriculation</h2>
                        </li>
                        <li>
                            <h3 className="place">Board of Secondary Education Karachi</h3>
                        </li>
                    </ul>
                    {/* box-2 */}
                    <div className="place-iconParent">
                        <div className="icon01">
                            <i class="fa-sharp fa-solid fa-school"></i>
                        </div>
                        <h1 className="school-name">Eden Grammar School - EGS</h1>
                    </div>

                    <div className="place-iconParent">
                        <div className="icon01">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <h1 className="school-name">Karachi,Pakistan</h1>
                    </div>
                    {/* box-2-finished */}
                </div>

                <div className="ChildOne-Eduction">
                    {/* box */}
                    <div className="matric-parent">
                        <div className="Matric">
                            <i class="fa-solid fa-school"></i>
                            <h5>Inter</h5>
                        </div>
                    </div>
                    {/* box finished*/}
                    <ul className="place-parent">
                        <li>
                            <h2 className="head-matric">Intermediate computer science</h2>
                        </li>
                        <li>
                            <h3 className="place">Board of Intermediate Education Karachi</h3>
                        </li>
                    </ul>
                    {/* box-2 */}
                    <div className="place-iconParent">
                        <div className="icon01">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <h1 className="school-name">private</h1>
                    </div>

                    <div className="place-iconParent">
                        <div className="icon01">
                            <i class="fa-regular fa-note-sticky"></i>
                        </div>
                        <h1 className="school-name"><strong>("I am still pursuing my studies.")</strong></h1>
                    </div>
                    {/* box-2-finished */}
                </div>
            </div>

            <div className="education-parent">
                <div className="ChildOne-Eduction">
                    {/* box */}
                    <div className="matric-parent">
                        <div className="Matric">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h5>Web & APP</h5>
                        </div>
                    </div>
                    {/* box finished*/}
                    <ul className="place-parent">
                        <li>
                            <h2 className="head-matric">Web Application & Mobile Application Developement</h2>
                        </li>

                    </ul>
                    {/* box-2 */}
                    <div className="place-iconParent">
                        <div className="icon02">
                            <img src="https://www.expertizouniversity.pk/img/UniLogo-alt.png" width={"50px"} />
                        </div>
                        <h1 className="school-name01">Expertizo University</h1>
                    </div>

                    <div className="place-iconParent">
                        <div className="icon01">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <h1 className="school-name">Bahadurabad,Karachi</h1>
                    </div>
                    {/* box-2-finished */}
                </div>

                <div className="ChildOne-Eduction">
                    {/* box */}
                    <div className="matric-parent">
                        <div className="Matric">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h5>Branding</h5>
                        </div>
                    </div>


                    {/* box finished*/}
                    <ul className="place-parent">
                        <li>
                            <h2 className="head-matric">Graphic Designing</h2>
                        </li>
                    </ul>
                    <div className="place-iconParent">
                        <div className="icon02">
                            <img src="https://www.arena-multimedia.com/frontend/images/home-page/landing-page-logo.png" width={"40px"} />
                        </div>
                        <h1 className="school-name01">Arena Multimedia</h1>
                    </div>
                    {/* box finished*/}
                    <div className="place-iconParent">
                        <div className="icon01">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <h1 className="school-name">Gulshan-e-Iqbal, Karachi</h1>
                    </div>
                    {/* box-2 */}

                    {/* box-2-finished */}
                </div>
            </div>
        </div>


    </>

}

export default Education;
