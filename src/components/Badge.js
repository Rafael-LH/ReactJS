import React,{Component} from 'react'
import logo from '../images/badge-header.svg'
import avatar from '../images/avatar.png'
import Gravatar from './Gravatar'

    export default class Badge extends Component{
            render(){

                let {firstName,lastName, jobTitle, twitter, email, github} = this.props.data
                return(
                    <div className="Badge">

                        <div className="Badge__header">
                             <img src={logo} alt="Logo de la conferencia" />
                        </div>
                        <div className="Badge__section-name">
                                <Gravatar className='Badge__avatar' email={email} />
                            <h1>
                                {firstName === '' ? 'First_Name' : firstName} <br /> {lastName === '' ? 'Last_Name' : lastName}
                            </h1>
                        </div>
                        <div className="Badge__section-info">
                            <h3>{jobTitle === '' ? 'Job_Title' : jobTitle}</h3>
                            <div>{twitter === '' ? 'Twitter' : twitter}</div>
                            <div>Email: {email === '' ? 'Email' : email}</div>
                        </div>
                        <div className="Badge__footer">
                            <a href={github} target="__blank">My projects in GitHub</a>
                        </div>
                    </div>
                )
            }
    }