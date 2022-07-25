import React from 'react'
import headerLogo from '../../assets/LogoNuevo1.png'
import { TextMain } from '../textMain/TextMain'
import { Link } from 'react-router-dom'
import './headerMain.css'

export const HeaderMain = () => {

   
    return (
        <div className="d-flex flex-column justify-content-start justify-content-lg-center align-items-center header-main header-main-background">
            <img className="img-polis-header d-none d-lg-block" src={headerLogo} alt="header-logo" />
            {/* <TextMain /> */}
            <div className="d-none d-md-flex justify-content-center align-items-center px-2 text-center" >
                <p className='text-main d-flex flex-column mx-4 mt-2 jusfity-content-center'>
                    LABORATORIO DE INICIATIVAS PARA LA GESTIÓN DE CIUDADES SOSTENIBLES
                </p>
            </div>
            <TextMain/>         
        </div>
    )
}
