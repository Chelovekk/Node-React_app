import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavDropdown, Nav, Table} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'

export default function Navibar (){
    return(
        <div className="font-weight-light">
          <div className="d-flex justify-content-end">
          <div className="flex-column justify-content-end ">
              <p>Игорь</p>
              <p>Олег</p>
          </div> 
          <div className="flex-column justify-content-end ml-5">
              <p>+380000000000</p>
              <p>+380000000000</p>
          </div>  
          
          </div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Гранит</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
              <Nav.Link ><NavLink to='/home'>Главная</NavLink></Nav.Link>
              <Nav.Link ><NavLink to='/uslugi'>Услуги</NavLink></Nav.Link>
              <NavDropdown title="Товары" bg="dark" >
                <NavDropdown.Item><NavLink to="/pruducts/odinarni">Одинарные</NavLink></NavDropdown.Item>
                <NavDropdown.Item>Брущатка</NavDropdown.Item>
                <NavDropdown.Item>Плитка</NavDropdown.Item>
                <NavDropdown.Item>Другие изделия</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Памятники</NavDropdown.Item>
              </NavDropdown>
               
            </Nav>
          
          </Navbar.Collapse>
        </Navbar>
        </div>
    )
}