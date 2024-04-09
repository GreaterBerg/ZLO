import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className="logo">ИМПЕРИЯ ЗЛА.</a>
            <ul>
                <li><a href="#formulas">Формулы</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </div>
    )
}

export default Navbar;