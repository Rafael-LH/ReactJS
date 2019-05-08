import React,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
//img
import stars from '../images/stars.svg'
import confLogo from '../images/platziconf-logo.svg'
//components
import Badge from '../components/Badge'
import Modal from '../components/Modal'

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
                                    <button className="btn btn-danger" onClick={props.onOpenModal}>Delete</button>
                                        <Modal isOpen={props.modalListOpen} onCloseModal={props.onCloseModal} >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fugiat officiis
                                            sequi sint inventore dignissimos excepturi
                                            repellendus possimus ut voluptates quisquam illum expedita assumenda, minus aspernatur eos,
                                            nisi totam voluptatum.
                                        </Modal>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

  export default BadgeDetails