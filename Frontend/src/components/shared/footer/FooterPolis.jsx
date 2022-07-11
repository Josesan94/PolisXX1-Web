import React from "react";
import './footerPolis.css'

// react-icons
import { FaArrowCircleUp, FaArrowUp, FaFacebookSquare, FaFrog, FaInstagramSquare, FaTwitterSquare,FaTelegram,FaDiscord,FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const FooterPolis = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="footer-polis justify-content-center align-items-center">
            <div className="container-polis">
                <div className="row justify-content-center ">
                    <div className="footer-col ">
                        <h2>Nosotros</h2>
                        <ul>
                            <li><Link to='/aboutUs'>Valores y Objetivos</Link></li>
                            <li><Link to='/youngsters/about'>Nuestro equipo</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Contactanos</h2>
                        <ul>
                            <li><Link to=''>Recursos humanos</Link></li>
                            <li><Link to=''>Oficinas</Link></li>
                            <li><Link to=''>Legales</Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Nuestras redes</h2>
                        <div className="social-links">
                            <a href='https://www.instagram.com/polis_xxi/'><FaInstagramSquare className="social-icon" /></a>
                            <a href='https://twitter.com/XxiPolis'><FaTwitterSquare className="social-icon" /></a>
                            <a href='https://www.linkedin.com/in/polis-xxi/'><FaLinkedin className="social-icon" /></a>
                            <a href=' '><FaTelegram className="social-icon" /></a>
                            <a href=' '><FaDiscord className="social-icon" /></a>

                        </div>
                    </div>
                </div>

                <br />
                <div className="rights-polis">
                    <p>  FrogDevs ©Derechos reservados </p>
                    <button className="arrowUp" onClick={scrollToTop}  ><FaArrowCircleUp className="mb-1 " /></button>
                </div>
            </div>

        </footer>

    )
}