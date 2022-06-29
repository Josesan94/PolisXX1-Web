import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/LogoNuevo1.png'
import './navbarMain.css'

// import {IoSearchCircle} from 'react-icons/io'

export const NavbarMain = () => {


  const [showInput, setShowInput] = useState(false)
  console.log("🚀 ~ file: NavbarMain.jsx ~ line 14 ~ NavbarMain ~ showInput", showInput)
  

  const visibleInput = showInput ? "" : "search-input-opacity";

  const showInputSearch = (e) => {
    setShowInput(!showInput);
  };
  
  return (
    <Navbar bg="light" expand="lg" className="sticky-top  navbar-main" >
      <Container className="d-flex align-items-center">
        <div className=" d-flex justify-content-center justify-content-lg-start align-items-center text-center logo-navbar-contain">
          <Navbar.Brand as={NavLink} to="/" ><img src={Logo} alt="logo" className="logo-navbar" /></Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto pb-2  border-0 navbar-links">
            <div className="d-flex  flex-column flex-lg-row align-items-center justify-content-center w-100 navbar-links">
              <li className="p-2 mt-2 mx-3 align-items-center" >
                <Nav.Link as={NavLink} to="/aboutUs" activeclassname="link-active">NOSOTROS</Nav.Link>
              </li>
              <li className="p-2 mt-2 mx-3 align-items-center">
                <Nav.Link as={NavLink} to="/novelties" activeclassname="link-active">NOVEDADES</Nav.Link>
              </li>
              <li className="p-2 mt-2 mx-3 align-items-center">
                <Nav.Link as={NavLink} to="/participate" activeclassname="link-active" >PARTICIPÁ/COLABORA</Nav.Link>
              </li>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex ">
        <Form className="d-flex ">
          <input
            type="search"
            placeholder="Buscar"
            className={`me-2 rounded-2 input-search-style ${visibleInput}`}
            aria-label="Search"
          />
        </Form>
        <button className="btn-search" onClick={showInputSearch} ><FaSearch className="mb-2" /></button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}
