// Dependencies
import React,{Component, Fragment} from 'react'

// Components
import header from "../images/platziconf-logo.svg";
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import stars from '../images/stars.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'
import SubNavBar from '../components/SubNavBar'

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
                    loading: false,
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

                     let {firstName, lastName, email, jobTitle, twitter } = this.state.form
                     let validaString = /^([a-z]+\s?)*$/i

                     this.setState({
                        loading: true,
                           form:{
                               ...this.state.form,
                               avatarUrl: avatar
                          },
                    })

                    if(firstName !== '' && lastName !== '' && email !== '' && jobTitle !== '' && twitter !== ''){
                            if(validaString.test(firstName) && validaString.test(lastName) ){
                                
                            setTimeout(async () => {
                                try {
                                        await api.badges.create(this.state.form)
                                        this.setState({
                                            loading: false,  
                                        })
                                        this.props.history.push('/badges/'); //aparte de location tambien existen match y location
                                                //match
                                                //location 

                                    } catch (error) {
                                        this.setState({
                                            loading: false,    
                                            error: true,
                                            messageErr: `Ha ocurrido algun problema ${error}`,
                                        })
                                    }
                                }, 1000)
                            }else{
                                this.setState({
                                    loading: false,
                                    error: true,
                                    messageErr: 'los campos de first name y last name solo aceptan caracteres. no numeros'
                                })

                            }

                     }else{
                         this.setState({
                                loading: false,
                                error: true,
                                messageErr: 'No puedes dejar valores nulos'
                         })
                     }
                                            
                } 

                render(){

                    // manejando el loading
                    if(this.state.loading){
                        return (
                           <PageLoading />
                        )
                     }  
                    return(
                    //   con React Fragment lo que hacemos es no escribir div innecesarios solo para poder renderear mas de una cosa   
                      <Fragment>
                          <SubNavBar stars={stars} confLogo={header} />
                          <div className="container">
                              <div className="row">
                                  <div className="col">
                                        <Badge data={this.state.form} />
                                  </div>
                                  <div className="col">
                                        <h1>New Attendant</h1>
                                        <BadgeForm 
                                                onChange={this.handleChange}
                                                formValues={this.state.form} 
                                                //handleClick={this.handleClick} 
                                                onSubmit={this.handleSubmit} 
                                                error={this.state.error}
                                                messageErr={this.state.messageErr}
                                                />
                                  </div>
                              </div>
                          </div>  
                      </Fragment>  
                    )
                }
    }