import React,{Component, Fragment} from 'react'
import header from "../images/badge-header.svg";
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import stars from '../images/stars.svg'



    export default class BadgeNew extends Component{

            //  algo que es muy interesante y  que le da el nombre a react es que es reactivo reaccionar 
            //  cada vez hay un cambio en el state o en los props que recibe un componente se vuelve a renderisar todo el componente
            //  y todos sus decendientes

            // declaramos nuestro estado del componente
            state = {
                    form: {
                        firstName: '',
                        lastName :'',
                        email :'',
                        jobTitle :'',
                        twitter :''
                    },
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

                handleClick = e =>{
                    e.preventDefault()
                    let {firstName, lastName} = this.state.form
                    let string = /^([a-z]+\s?)*$/i

                    alert( (!string.test(firstName) ) ? 'El campo first Name solo acepta caracteres' : 'registrado' )

                }

                render(){
                    let { firstName, lastName, email, jobTitle, twitter} = this.state.form
                    
                    let data = {
                        firstName: firstName,
                        lastName: lastName,
                        jobTitle: jobTitle,
                        twitter : twitter,
                        email: email,
                        github: "https://github.com/Rafael-LH?tab=repositories"
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
                                        <Badge data={data} />
                                  </div>
                                  <div className="col">
                                    <BadgeForm 
                                            onChange={this.handleChange}
                                            formValues={this.state.form} 
                                            handleClick={this.handleClick}  
                                            />
                                  </div>
                              </div>
                          </div>  
                      </Fragment>  
                    )
                }
    }