import React, {Component, Fragment} from "react"
import {Link} from 'react-router-dom'

import confLogo from '../images/badge-header.svg'
import stars from '../images/stars.svg'
import BadgesList from '../components/BadgesList'
// import data from "../components/data.json"

        export default class Badges extends Component{

                // el constructor siempre recibe props y esos props los tenemos que inicializar con la super clase
                constructor(props){
                    super(props)
                    console.log('1. constructor()')

                    this.state = {
                        data: []
                    }

                    // si llamamos a nuestro constructor es bueno y por buenas practicas aqui mismo declarar nuestro state
                    // si es que tenemos uno y otras cosa la declaracion de state en el constructor es con this seguido de state
                    // this.state
                }

                // las funciones que estan a continuacion son metodos pre definidos por ReacrJS

                // esta funcion se llama despues de que haya cargado el constructor y el render
                componentDidMount(){
                    console.log('3. componentDidMount()')

                    // este setTimeout nos retorna un id el cual lo guardamos en this.timeoutId y llama mos la funcion de componentWillUnmount
                    // la cual lo hacemos en  componentWillUnmount 
                    this.timeoutId = setTimeout(()=>{
                        this.setState({
                            data: [
                                {
                                    id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",
                                    firstName:"Freda",
                                    lastName:"Grady",
                                    email:"Leann_Berge@gmail.com",
                                    jobTitle:"Legacy Brand Director",
                                    twitter:"FredaGrady22221-7573",
                                    avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                                },
                                {
                                    id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",
                                    firstName:"Major",
                                    lastName:"Rodriguez",
                                    email:"Ilene66@hotmail.com",
                                    jobTitle:"Human Research Architect",
                                    twitter:"ajorRodriguez61545",
                                    avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                                },
                                {
                                    id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",
                                    firstName:"Daphney",
                                    lastName:"Torphy",
                                    email:"Ron61@hotmail.com",
                                    jobTitle:"National Markets Officer",
                                    twitter:"DaphneyTorphy96105",
                                    avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                                }
                            ]
                            
                        })
                    }, 3000)
                }
                // esta funcion se llama cuando el estado de un componente o el props de un componente cambia de valor primero 
                // se renderizara de nuevo el componente y despues ahora si se llama el componentDidUpdate
                componentDidUpdate(prevProps, prevState){
                    console.log('5. componentDidUpdate()')
                    console.log({
                        prevProps: prevProps,
                        prevState: prevState
                    })
                    console.log({
                        props: this.props,
                        state: this.state
                    })
                }
                // esta funcion se llama antes de que el componente salga de escena/se valla
                componentWillUnmount(){
                    console.log('6. componentWillUnmount()');
                    // aqui llamamos la funcion clearTimeout, lo que hace esta funcion es ver si existe ese id y si existe y ese setTimeout esta
                    // pendiente lo cancela

                    clearTimeout(this.timeoutId);
                }
                render(){
                    console.log('2/4. render()')
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