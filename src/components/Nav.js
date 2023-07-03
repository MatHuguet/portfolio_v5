import React from "react";
import '../styles/nav.css'

    const navItem = document.getElementsByClassName('nav-item')
        for (let items of navItem){
            console.log(items)
            }
        
    

export default function Nav() {
    return (
        <nav>
        
            <div className="nav-container">
                <ul>
                    <li className="nav-item about" id="about"><h4>A PROPOS</h4></li>
                    <li className="nav-item cv"><h4>CV</h4></li>
                    <li className="nav-item skills"><h4>COMPETENCES</h4></li>
                    <li className="nav-item portfolio"><h4>PORTFOLIO</h4></li>
                    <li className="nav-item contact"><h4>CONTACT</h4></li>
                </ul>
            </div>
        </nav>
    )

}


