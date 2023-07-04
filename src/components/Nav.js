import React from "react";
import '../styles/nav.css'

const navItem = document.getElementsByClassName('nav-item')
export let sideTitle = "A PROPOS"

function getNavTarget(targets){
    for (let target of targets){
        target.addEventListener('click', function(e){
            console.log('hello');
            return e.target.innerText
            
        })
    }
}

console.log(getNavTarget(navItem));

//f

export default function Nav() {
    return (
        <nav>
        
            <div className="nav-container">
                <ul>
                    <li 
                        className="nav-item about" 
                        id="nav-item about">
                            <h4>A PROPOS</h4>
                    </li>
                    <li 
                        className="nav-item cv" 
                        id="nav-item cv">
                            <h4>CV</h4>
                    </li>
                    <li 
                        className="nav-item skills" 
                        id="nav-item skills">
                            <h4>COMPETENCES</h4>
                    </li>
                    <li 
                        className="nav-item portfolio" 
                        id="nav-item portfolio">
                            <h4>PORTFOLIO</h4>
                    </li>
                    <li 
                        className="nav-item contact" 
                        id="nav-item contact">
                            <h4>CONTACT</h4>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}





