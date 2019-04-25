import React, {Component} from "react"
import NavBar from '../components/NavBar'
import confLogo from '../images/badge-header.svg'
import stars from '../images/stars.svg'
import BadgesList from '../components/BadgesList'
import data from "../components/data.json";



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
                                    <a href="/badges/new" className="btn btn-primary">New Badge</a>
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