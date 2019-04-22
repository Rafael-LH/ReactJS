import React,{Component} from 'react'
import logo from '../../images/badge-header.svg'

    export default class BadgeContainer extends Component{
            render(){

                let {name} = this.props

                return(
                       <div className="container-logo">    
                            <img src={logo} alt="" />
                       </div>  
                )
            }
    }