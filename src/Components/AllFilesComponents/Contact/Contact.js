import React, { useState } from "react";
import './Contact.css'
import 'animate.css'




function Contact() {

    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Mobile, setMobile] = useState()
    const [Subject, setSubject] = useState()
    const [Message, setMessage] = useState()

    function sendMessage() {
        if (!Name || !Email || !Mobile || !Subject || !Message) {
            alert("Please Enter All filed!")
        } else {
            async function workSendStart() {
                const ApiPost = await fetch("https://protfoliosever-fscknvyj.b4a.run/api/Contact/ContactPostWork", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        Name,
                        Email,
                        Mobile,
                        Subject,
                        Message,
                    })
                })
                const serverResponse = await ApiPost.json()
                console.log(serverResponse)
                alert(serverResponse.message)
            }
            workSendStart()

            setEmail("")
            setName("")
            setMobile("")
            setMessage("")
            setSubject("")
        }

    }



    return <>
        <div className="container">
            <h1 className="ContactMe animate__animated animate__swing">Connect With Me</h1>

            <div className="handels-parent">
                <a href="https://www.facebook.com/profile.php?id=100009909430800" target="_blank">

                    <div className="Child-parent">
                        <div className="tect-logo-parent">
                            <img src="https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid" />
                        </div>
                        <h1 className="name-handel">facebook</h1>
                    </div>

                </a>

                <a href="https://www.instagram.com/web_graphstudio/" target="_blank">
                    <div className="Child-parent">
                        <div className="tect-logo-parent">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBFXCirT08g-Mqzt1m6oD1Z6Dw4Oc9XqwDw&s" />
                        </div>
                        <h1 className="name-handel">instagram </h1>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/hafizhammadjs/" target="_blank">
                    <div className="Child-parent">
                        <div className="tect-logo-parent">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384874.png" />
                        </div>
                        <h1 className="name-handel">LinkedIn </h1>
                    </div>
                </a>
                <a href="https://www.threads.net/@web_graphstudio" target="_blank">
                    <div className="Child-parent">
                        <div className="tect-logo-parent">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxb7xlMmljz2QJhfZs0nGnteuYCl88ilsREQ&s" />
                        </div>
                        <h1 className="name-handel">threads </h1>
                    </div>
                </a>
            </div>

            <h1 className="ContactMe">Contact Me</h1>

            <div className="adject">
                <div className="contact-us-parent">
                    <div>
                        <label><i class="fa-solid fa-user"></i> Name *</label>
                        <input onChange={(e) => setName(e.target.value)} className="Name-work" placeholder="Name" value={Name} />
                    </div>
                    <div>
                        <label><i class="fa-solid fa-envelope"></i> Eamil *</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="Name-work" placeholder="Email" value={Email} type="email" />
                    </div>
                    <div>
                        <label><i class="fa-solid fa-mobile"></i> Mobile *</label>
                        <input onChange={(e) => setMobile(e.target.value)} className="Name-work" placeholder="Phone Number" value={Mobile} type="number" />
                    </div>

                    <div>
                        <label> subject *</label>
                        <input onChange={(e) => setSubject(e.target.value)} className="Name-work" placeholder="Subject" value={Subject} type="text" />
                    </div>

                    <div>

                        <textarea onChange={(e) => setMessage(e.target.value)} value={Message} placeholder="Message">

                        </textarea>
                    </div>
                </div>

                <div className="btn-parent-ME">
                    <button onClick={sendMessage} className="btnss">Send</button>
                </div>

            </div>

            {/* final */}

            <h1 className="ContactMe">Protfolio Made With</h1>

            <div className="handels-parent">

                <div className="Child-parent">
                    <div className="tect-logo-parent">
                        <img src="https://github.com/hafizhammad123/immggg/blob/main/react-icon-removebg-preview.png?raw=true" />
                    </div>
                    <h1 className="name-handel">React</h1>
                </div>

                <div className="Child-parent">
                    <div className="tect-logo-parent">
                        <img src="https://github.com/hafizhammad123/immggg/blob/main/bostap-removebg-preview.png?raw=true" />
                    </div>
                    <h1 className="name-handel">Bootstrap </h1>
                </div>

                <div className="Child-parent">
                    <div className="tect-logo-parent">
                        <img src="https://static-00.iconduck.com/assets.00/figma-icon-256x256-73jx2t0q.png" />
                    </div>
                    <h1 className="name-handel">Figma </h1>
                </div>

                <div className="Child-parent">
                    <div className="tect-logo-parent">
                        <img src="https://github.com/hafizhammad123/immggg/blob/main/node-removebg-preview%20(1).png?raw=true" />
                    </div>
                    <h1 className="name-handel">Node.js </h1>
                </div>

                <div className="Child-parent">
                    <div className="tect-logo-parent">
                        <img src="https://github.com/hafizhammad123/immggg/blob/main/express-removebg-preview.png?raw=true" />
                    </div>
                    <h1 className="name-handel">Express </h1>
                </div>

                <div className="Child-parent">
                    <div className="tect-logo-parent">
                        <img src="https://firebasestorage.googleapis.com/v0/b/my-protfolio-img-data.appspot.com/o/Myimage%20-%20firebase.png?alt=media&token=e889d860-3511-40e3-9031-9c453f4bdc20" />
                    </div>
                    <h1 className="name-handel">Firebase</h1>
                </div>

            </div>

        </div>

    </>
}


export default Contact;