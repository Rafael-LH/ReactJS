import React,{Component} from 'react'
import logo from '../../images/badge-header.svg'
import avatar from '../../images/avatar.png'

    export default class BadgeContainer extends Component{
            render(){

                let {name,lastName} = this.props.data

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
                                {name} <br /> {lastName}
                            </h1>
                        </div>
                        <div className="Badge__section-info">
                            <h3>Frontend Engineer</h3>
                            <div>@rafael</div>
                        </div>
                        <div className="Badge__footer">#platziconf</div>
                  </div>
                )
            }
    }