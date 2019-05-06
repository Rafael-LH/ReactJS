import React, {Component, Fragment} from "react"
import {Link} from 'react-router-dom'

import confLogo from '../images/badge-header.svg'
import stars from '../images/stars.svg'
import BadgesList from '../components/BadgesList'
// import data from "../components/data.json"
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

        export default class Badges extends Component{

                // el constructor siempre recibe props y esos props los tenemos que inicializar con la super clase
                constructor(props){
                    //inicializamos los props en la super clase
                    super(props)
                    console.log('1. constructor()')

                    this.state = {
                        data: undefined,
                        loading: true,
                        error: null
                    }
                    // si llamamos a nuestro constructor es bueno y por buenas practicas aqui mismo declarar nuestro state
                    // si es que tenemos uno y otras cosa la declaracion de state en el constructor es con this seguido de state
                    // this.state
                }
                // siempre que queremos consumi una API ó queremos o hacer peticiones fetch se recomienda hacerlo en el 
                // componentDidMount de esta manera aseguramos que nuestro componente ya se rendereo y ya esta listo para 
                // recibir datos
                componentDidMount(){
                    this.fetchData()
                }

                fetchData = async () => {
                        this.setState({
                            loading: true,
                            error: false
                        })
                        
                        try {
                            // estos datos me los traigo de un archivo que se llama api.js el cual esta en src
                            const responseData = await api.badges.list()
                            this.setState({
                                    data: responseData,
                                    loading: false,
                               }) 
                        } catch (err) {
                            this.setState({
                                      error: true,
                                      messageErr: `Ha ocurrido algun problema ${err}`,
                                      loading: false 
                                })
                        }
                }

                render(){
                    console.log('2 render()')

                    if(this.state.loading){
                        return (
                           <PageLoading />
                        )
                     }  
                     if(this.state.error){
                        return (
                            <PageError error={this.state.messageErr}/>
                        )
                     } 
                    return(
                        <Fragment>
                            {/* este div de badges se repite en este componente y BadgesNew */}
                            <div className="Badges">
                                <div className="Badges__hero">
                                    <img className="img-fondo" src={stars} alt=""/>
                                    <div className="Badges__container">
                                        <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                                    </div>
                                </div>
                            </div>
                            <div className="Badges__container">
                                <div className="Badges__buttons">
                                    {/* cuando queremos poner un boton para cambiar de una pagina a otra
                                    en vez de utilizar una etiqueta <a></a> utilizamos el componente Link
                                    el cual lo tenemos que importar en lo mas alto despues de 
                                    importar react, si no la app fallaria, y en vez de utilizar href para indicarle 
                                    que pagina lo redireccionara, utilizamos to=url  
                                    */}
                                    <Link to="/badges/new/" className="btn btn-primary">
                                        New Badge
                                    </Link>
                                </div>

                                <div className="Badges__list">
                                    <div className="Badges__container">
                                        <BadgesList data={this.state.data}/>    
                                    </div>
                                </div>    

                            </div>
                        </Fragment>
                    )
                }
        }