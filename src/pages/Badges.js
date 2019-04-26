import React, {Component} from "react"
import {Link} from 'react-router-dom'

import NavBar from '../components/NavBar'
import confLogo from '../images/badge-header.svg'
import stars from '../images/stars.svg'
import BadgesList from '../components/BadgesList'
import data from "../components/data.json"




        export default class Badges extends Component{

                render(){
                    return(
                        <div>
                            <NavBar />
                            <div className="Badges">
                                <div className="Badges__hero">
                                    <img className="img-fondo" src={stars} alt=""/>
                                    <div className="Badges__container">
                                        <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                                    </div>
                                </div>
                            </div>
                            <div className="Badges__container">
                                <div className="Badges__buttons">
                                    {/* cuando queremos poner un boton para cambiar de una pagina a otra
                                    en vez de utilizar una etiqueta <a></a> utilizamos el componente Link
                                    el cual lo tenemos que importar en lo mas alto despues de 
                                    importar react, si no la app fallaria, y en vez de utilizar href para indicarle 
                                    que pagina lo redireccionara, utilizamos to=url  
                                    */}
                                    <Link to="/badges/new/" className="btn btn-primary">
                                        New Badge
                                    </Link>
                                </div>

                                <div className="Badges__list">
                                    <div className="Badges__container">
                                        <BadgesList data={data}/>    
                                    </div>
                                </div>    

                            </div>
                        </div>
                    )
                }
        }