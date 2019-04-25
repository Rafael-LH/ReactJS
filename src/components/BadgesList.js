import React,{Component} from "react";

export default class BadgesList extends Component{
            render(){
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