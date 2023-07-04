import React from "react";
import "../styles/content.css"
import { sideTitle } from "./Nav";


export default function Content() {
    return (
        <div className="content-container">
            <div className="section-title" id="section-title"><h5 className="side-title">{sideTitle}</h5></div>
            <div className="section-content">Hello</div>
        </div>
    )
}