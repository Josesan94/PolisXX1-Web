import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare,FaTelegram,FaDiscord } from 'react-icons/fa'
import './sidebarRedes.css'


export const SidebarRedes = () => {

    let ubicacion = window.pageYOffset;
    window.onscroll = function() {
        let Desplazamiento = window.pageYOffset;

        if(ubicacion >= Desplazamiento){
            
        }
    }

    return (
        <div className="sticky-container d-none d-sm-inline">
        <ul className="sticky sticky-side-social-icons">
            
            <li>
                <FaTwitterSquare className="sidebarIcon" />
                <p><a href="https://twitter.com/XxiPolis" >Seguinos en<br/>Twitter</a></p>
            </li>
            <li>
                <FaInstagramSquare className="sidebarIcon" />
                <p><a href="https://www.instagram.com/polis_xxi/" >Seguinos en<br/>Instagram</a></p>
            </li>
            <li>
                <FaLinkedin className="sidebarIcon" />
                <p><a href="https://www.linkedin.com/in/polis-xxi/" >Conectanos en<br/>LinkedIn</a></p>
            </li>
            <li>
                <FaTelegram className="sidebarIcon" />
                <p><a href="http://www.telegram.com/programacionnet" >Conectanos en<br/>Telegram</a></p>
            </li>
            <li>
                <FaDiscord className="sidebarIcon" />
                <p><a href="http://www.discord.com/programacionnet" >nuestro canal de<br/>Discord</a></p>
            </li>
        </ul>
    </div>
    )
}
