import React,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

import stars from '../images/stars.svg'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import Badge from '../components/Badge'


    export default class BadgeDetails extends Component{

            state = {
                    data: undefined,
                    error: false,
                    messageErr: '',
                    loading: true,
                }

            componentDidMount(){
                this.fetchData();
            }   

            fetchData = async e => {
                    
                    this.setState({
                        error: false,
                        loading: true,
                    })

                    try {
                         // con el metodo read traemos de nuestra api los datos dependiendo del id que se pasemos, el cual 
                        // estamos obteniendo por get
                        let data = await api.badges.read(
                            // Gracias a react router podemos acceder a valores por medio de get con match.params. seguido del nombre
                            // de la varible que cacharemos por get que es badgeId, quedaria match.params.badgeId
                                this.props.match.params.badgeId
                            )
                        this.setState({
                            error: false,
                            loading: false,
                            data: data
                        })    
                    } catch (error) {
                        this.setState({
                            error: false,
                            messageErr: `Ha ocurrido algun problema ${error}`,
                            loading: false,
                        })
                    }
            }

            render(){
                    if(this.state.loading){
                        return(
                            <PageLoading />
                        )
                    }
                    if(this.state.error){
                        return(
                            <PageError />
                        )
                    }
                 //Destructuracion de objeto   
                 let {firstName, lastName, id} = this.state.data

                return(
                    <Fragment>
                        <div className="Badges">
                            <div className="Badges__hero">
                                    <img className="img-fondo" src={stars} alt=""/>
                                    <div className="Badges__container">
                                        <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                                        <h1>{firstName} {lastName}</h1>
                                    </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Badge data={this.state.data}/>
                                </div>
                                <div className="col">
                                    <h1>Actions</h1>
                                    <div>
                                        <div>
                                            <Link to={`/badges/${id}/edit`} className="btn btn-info mb-4">
                                                   Edit 
                                            </Link>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
    }