import React,{Component} from "react";
import {Link} from 'react-router-dom'

export default class BadgesList extends Component{
            render(){
                
                if(this.props.data.length === 0){
                    return(
                        <div className="container-info">
                           <b> 
                           <span>No Badges were found</span>
                            <Link to="/badges/new/" >
                                Click aqui para crear uno :)
                            </Link>
                            </b>
                        </div>
                    )
                }
                return(
                    <ul className="list-unstyled" >
                            {
                                this.props.data.map(badge => {
                                    return(
                                        <li key={badge.id} className="container-li">
                                            <div>
                                                <img className="img-avatar" src={badge.avatarUrl} alt=""/>
                                            </div>  
                                            <div className="sub_contenedor_info">
                                                <span><b>{badge.firstName}</b></span>
                                                <span className="twitter"><i className="fab fa-twitter twitter"></i>@{badge.twitter}</span>
                                                <span>{badge.jobTitle}</span>
                                            </div>  
                                        </li>
                                    )
                                })
                            } 
                    </ul>
                )
            }
}