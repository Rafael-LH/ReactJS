import React,{Component, Fragment} from 'react'
import {createPortal} from 'react-dom'
import {Link} from 'react-router-dom'
//img
import stars from '../images/stars.svg'
import confLogo from '../images/platziconf-logo.svg'
//components
import Badge from '../components/Badge'

// Componente de la UI(User interface)
// cuando nuestro componente no tiene logica no es necesario de crear una clase entonces aqui entran los 
// componentes funcionales, DUM component, componente presentacional, componente tonto, seria la vista del MVC

 const BadgeDetails = props => {
         
         //Destructuracion de objeto   
         let {firstName, lastName, id} = props.data

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
                            <Badge data={props.data}/>
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
                                        {/* createPortal(que queremos renderizar, donde lo queremos renderizar) */}
                                    {
                                        createPortal(
                                            <h1>Hola Soy un modal</h1>,
                                            document.getElementById('modal')
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

  export default BadgeDetails