import React from "react";
import "../styles/header-style.css"
import LogoGit from "../img/icons8-github-grey90.png"
import LogoLinkedin from "../img/icons8-linkedin-grey96.png"
import LogoInstagram from "../img/icons8-instagram-grey100.png"

export default function Header() {
    return (
        <header>
            <div className="container" id="header-container">
                <div className="profile-pic">Profile</div>
                <div className="title">
                    <h2 className="first-name">MATHIEU</h2>
                    <h1>HUGUET</h1>
                    <h2>Développeur Web et Web mobile</h2>
                    <h3>Fullstack</h3>
                </div>
                <div className="social">
                    <ul className="social-list">
                        <li className="social-list-item github">
                            <img src={LogoGit} alt="github link" width="30px"/>
                        </li>
                        <li className="social-list-item linkedin">
                            <img src={LogoLinkedin} alt="linkedin link" width="40px"/>
                        </li>
                        <li className="social-list-item instagram">
                            <img src={LogoInstagram} alt="instagram link" width="30pxx"/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}