import React,{Component} from 'react'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'

    export default class BadgeDetailsContainer extends Component{

            state = {
                    data: undefined,
                    error: false,
                    messageErr: '',
                    loading: true,
                    modalListOpen: false
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
            }//cierre fetchdata
            handleCloseModal = e =>{
                this.setState({
                    modalListOpen: false
                })
            }
            handleOpenModal = e =>{
                this.setState({
                    modalListOpen: true
                })
            }
            handleOnDeleteBadge = async e => {

                    this.setState({
                        loading: true,
                        error: false
                    })     

                    try {
                        // Gracias a react router podemos acceder a valores por medio de get con match.params. seguido del nombre
                        // de la varible que cacharemos por get que es badgeId, quedaria match.params.badgeId
                        await api.badges.remove(this.props.match.params.badgeId)

                        this.setState({
                            loading: false,
                            error: false
                        }) 

                        this.props.history.push('/badges/')
                        
                    } catch (error) {
                        this.setState({
                            loading: false,
                            error: true,
                            messageErr: `Ha ocurrido algun problema ${error}`
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
                //  let {firstName, lastName, id} = this.state.data

                return(
                    <BadgeDetails data={this.state.data}
                                  modalListOpen={this.state.modalListOpen}  
                                  onCloseModal={this.handleCloseModal}
                                  onOpenModal={this.handleOpenModal}
                                  onDeleteBadge={this.handleOnDeleteBadge}
                                  />
                )
            }
    }