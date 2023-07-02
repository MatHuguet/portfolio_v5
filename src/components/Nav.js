import React from "react";
import '../styles/nav.css'

export default function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-item about">
                    <h4>A PROPOS</h4>
                </div>
                <div className="nav-item cv">
                    <h4>CV</h4>
                </div>
                <div className="nav-item skills">
                    <h4>COMPETENCES</h4>
                </div>
                <div className="nav-item portfolio">
                    <h4>PORTFOLIO</h4>
                </div>
                <div className="nav-item contact">
                    <h4>CONTACT</h4>
                </div>
            </div>
        </nav>
    )
}