import React,{Component} from 'react'
import logo from '../images/logo.svg'

    const NavBar = props =>{
            return(
                <div className="Navbar">
                    <div className="container-fluid">
                        <a href="#" className="Navbar__brand">
                            <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                            <span className="font-weight-light">Platzi</span>
                            <span className="font-weight-bold"> Conf</span>
                        </a>
                    </div>
                </div>
            )
    }

    export default NavBar