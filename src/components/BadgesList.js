import React,{Component} from "react";
import {Link} from 'react-router-dom'

//components 
import BadgesListItem from './BadgesListItem'


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
                                            <BadgesListItem badge={badge} />
                                        </li>
                                    )
                                })
                            } 
                    </ul>
                )
            }
}