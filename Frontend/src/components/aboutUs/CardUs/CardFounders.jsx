import React from "react"
import icono_linkedin from "../../../assets/linkedin-icono.png"
import { Link } from "react-router-dom";
import Title from "../../title/Title";
import './cardUs.css'

const CardFounders = ({ infoCardsFoundersUs }) => {
    return (
        <div id="nuestroEquipo">
            <hr />
            <Title
                type='violet-1'
                placeholder='NUESTRO EQUIPO'
                position='center'
            />
            <div className="row row-cols-2 row-cols-md-5 justify-content-center align-items-center">
                {infoCardsFoundersUs && (
                    infoCardsFoundersUs.map((card, i) => (
                        <div className="person-container" key={i}>
                            <div className="img-us-container">
                                <img
                                    className="circle-us"
                                    src={card.img}
                                    alt="maroñas"
                                />
                            </div>
                            <div className="description-us-container d-flex flex-column justify-content-between align-items-center">
                                <div className="divider-us"></div>
                                <span className="name-us">{card.name}</span>
                                <span className="profession-us">{card.title}</span>
                                <a href={card.linkedin_link}><img className="icono-linkedin" src={icono_linkedin} alt="linkedin-icono" /></a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default CardFounders;
