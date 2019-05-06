// Dependencies
import React,{Component, Fragment} from 'react'
import md5 from 'md5'

// Components
import header from "../images/platziconf-logo.svg";
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import stars from '../images/stars.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

    export default class BadgeNew extends Component{

            //  algo que es muy interesante y  que le da el nombre a react es que es reactivo reaccionar 
            //  cada vez hay un cambio en el state o en los props que recibe un componente se vuelve a renderizar todo el componente
            //  y todos sus decendientes

            // declaramos nuestro estado del componente
            state = {
                    form: {
                        firstName: '',
                        lastName :'',
                        email :'',
                        jobTitle :'',
                        twitter :'',
                        github: "https://github.com/Rafael-LH?tab=repositories",
                        avatarUrl: ''
                    },
                    error: false,
                    messageErr: '',
                    loading: false
                }

                handleChange = e => {
                    e.preventDefault()

                     this.setState({   

                            form:{
                                // aqui estamos creando un spread operator para almacenar x cantidad e elemento sin que se sobre escriban
                                ...this.state.form, 
                                //y este funciona para atrapar el valor nuevo el de aqui abajo se sobre escribe por cada valor que ingresamos
                                // es por eso que creamos un spread operator
                                [e.target.name]: e.target.value    

                            }

                            //y de esa manera es como evitamos que se sobre escriba, porque si solo lo dejamos como lo siguiente 
                            
                            // form:{
                            //     [e.target.name] : e.target.value
                            // }

                            // de esa manera se sobre escribe todo
                    })
                }

                // handleClick = e =>{
                //     e.preventDefault()
                //     let {firstName, lastName} = this.state.form
                //     let string = /^([a-z]+\s?)*$/i

                //     alert( (!string.test(firstName) ) ? 'El campo first Name solo acepta caracteres' : 'registrado' )

                // }
                handleSubmit = e => {
                      e.preventDefault()

                       let avatar = document.getElementById("avatarUrl").getAttribute('src')

                      this.setState({
                          loading: true,
                             form:{
                                 ...this.state.form,
                                 avatarUrl: avatar
                            },
                      })

                      setTimeout(async () => {
                        try {
                                await api.badges.create(this.state.form)
                                this.setState({
                                    loading: false,  
                                })
                            } catch (error) {
                                this.setState({
                                    loading: false,    
                                    error: true,
                                    messageErr: `Ha ocurrido algun problema ${err}`,
                                })
                            }
                        }, 1000)
                    } 

                render(){

                    // manejando el loading
                    if(this.state.loading){
                        return (
                           <PageLoading />
                        )
                     }  
                    // manejando el error
                    if(this.state.error){
                        return (
                            <PageError error={this.state.messageErr}/>
                        )
                     }
                    return(
                    //   con React Fragment lo que hacemos es no escribir div innecesarios solo para poder renderear mas de una cosa   
                      <Fragment>
                         <div className="Badges">
                                <div className="Badges__hero">
                                    <img className="img-fondo" src={stars} alt=""/>
                                    <div className="Badges__container">
                                        <img className="Badges_conf-logo" src={header} alt="Conf Logo"/>
                                    </div>
                                </div>
                            </div>   
                          <div className="container">
                              <div className="row">
                                  <div className="col">
                                        <Badge data={this.state.form} />
                                  </div>
                                  <div className="col">
                                        <BadgeForm 
                                                onChange={this.handleChange}
                                                formValues={this.state.form} 
                                                //handleClick={this.handleClick} 
                                                onSubmit={this.handleSubmit} 
                                                />
                                  </div>
                              </div>
                          </div>  
                      </Fragment>  
                    )
                }
    }