import React from "react";
import '../styles/nav.css'

// export function OnNavClick(){
//     const navItem = document.getElementsByClassName('nav-item')
//     const sectionTitle = document.getElementById('section-title')
//         for (let items of navItem){
//             items.addEventListener('click', e => {
                
//                 let textTitle = e.target.innerText;
//                 sectionTitle.innerHTML = `
//               
//                 `
                
                
//             })
//             }

// }

        
    

export default function Nav() {
    return (
        <nav>
        
            <div className="nav-container">
                <ul>
                    <li className="nav-item about" id="nav-item about" ><h4>A PROPOS</h4></li>
                    <li className="nav-item cv" id="nav-item"><h4>CV</h4></li>
                    <li className="nav-item skills" id="nav-item"><h4>COMPETENCES</h4></li>
                    <li className="nav-item portfolio" id="nav-item"><h4>PORTFOLIO</h4></li>
                    <li className="nav-item contact" id="nav-item"><h4>CONTACT</h4></li>
                </ul>
            </div>
        </nav>
    )

}


