import React,{Component} from 'react'
import logo from '../images/badge-header.svg'
import avatar from '../images/avatar.png'

    export default class Badge extends Component{
            render(){

                let {firstName,lastName, jobTitle, twitter, email, github} = this.props.data

                return(
                    <div className="Badge">

                        <div className="Badge__header">
                             <img src={logo} alt="Logo de la conferencia" />
                        </div>
                        <div className="Badge__section-name">
                            <img
                                className="Badge__avatar"
                                src={avatar}
                                alt="Avatar"
                            />
                            <h1>
                                {firstName} <br /> {lastName}
                            </h1>
                        </div>
                        <div className="Badge__section-info">
                            <h3>{jobTitle}</h3>
                            <div>{twitter}</div>
                            <div>Email: {email}</div>
                        </div>
                        <div className="Badge__footer">
                            <a href={github} target="__blank">My projects in GitHub</a>
                        </div>
                    </div>
                )
            }
    }