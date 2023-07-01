import React from "react";
import "../styles/header-style.css"

export default function Header() {
    return (
        <header>
            <div className="container" id="header-container">
                <div className="profile-pic">Profile</div>
                <div className="title">
                    <h1>MATHIEU<br></br>HUGUET</h1>
                    <h2>Développeur Web et Web mobile</h2>
                    <h3>Fullstack</h3>
                </div>
                <div className="social">social</div>
            </div>
        </header>
    )
}