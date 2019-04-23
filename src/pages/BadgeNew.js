import React,{Component} from 'react'
import NavBar from '../components/NavBar' 
import header from "../images/badge-header.svg";
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'


    export default class BadgeNew extends Component{
                render(){
                    let data = {
                        firstName: "Rafael",
                        lastName: "Lopez",
                        jobTitle: "Frontend Engineer",
                        github: "https://github.com/Rafael-LH?tab=repositories"
                    }
                    return(
                      <div>
                          <NavBar/>
                          <div className="BadgeNew__hero">
                             <img className="img-fluid" src={header} alt="Logo" />
                          </div>    
                          <div className="container">
                              <div className="row">
                                  <div className="col">
                                        <Badge data={data} />
                                  </div>
                                  <div className="col">
                                      <BadgeForm />
                                  </div>
                              </div>
                          </div>  
                      </div>  
                    )
                }
    }