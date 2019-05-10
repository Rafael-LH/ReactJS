import React,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

    const BadgesListItem = props => (
        <Fragment>
            <div>
                <img className="img-avatar" src={props.badge.avatarUrl} alt=""/>
            </div>  
            <div className="sub_contenedor_info">
                <span><b>{props.badge.firstName} {props.badge.lastName}</b></span>
                <span className="twitter"><i className="fab fa-twitter twitter"></i>@{props.badge.twitter}</span>
                <span>{props.badge.jobTitle}</span>
                <div className="container-update mt-4">
                    <Link to={`/badges/${props.badge.id}`} >
                            Detalles
                    </Link>
                    <Link to={`/badges/${props.badge.id}/edit/`} >
                            Actualizar
                    </Link>
                </div> 
            </div>  
        </Fragment>
    )

    export default BadgesListItem