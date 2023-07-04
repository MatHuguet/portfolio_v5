import React from "react";
import "../styles/header-style.css"
import LogoGit from "../img/icons8-github-96.png"
import LogoLinkedin from "../img/icons8-linkedin-bw-96.png"
import LogoInstagram from "../img/icons8-instagram-96.png"

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
                            <a href="https://github.com/MatHuguet" target="_blank" rel="noreferrer">
                                <img src={LogoGit} alt="github link" width="30px"/>
                            </a>
                        </li>
                        <li className="social-list-item linkedin">
                            <a href="https://www.linkedin.com/in/mathieu-huguet-b954371b9/" target="_blank" rel="noreferrer">
                                <img src={LogoLinkedin} alt="linkedin link" width="30px"/>
                            </a>
                        </li>
                        <li className="social-list-item instagram">
                            <a href="https://www.instagram.com/nuggyrocks/" target="_blank" rel="noreferrer">
                                <img src={LogoInstagram} alt="instagram link" width="30pxx"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}