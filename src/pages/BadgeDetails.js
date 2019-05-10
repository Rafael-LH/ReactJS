import React,{Component, Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
//img
import stars from '../images/stars.svg'
import confLogo from '../images/platziconf-logo.svg'
//components
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal' 

// Componente de la UI(User interface)
// cuando nuestro componente no tiene logica no es necesario de crear una clase entonces aqui entran los 
// componentes funcionales, DUM component, componente presentacional, componente tonto, seria la vista del MVC

// cuando queremos crear nuevas funciones para utilizar un hook custom, como regla el nombre de la funcion tiene que empezar con 
// use seguido del nombre que le queremos dar a nuestra funcion

   function useIncreaseCount(max){
        // el count viene siendo state y setCount seria setState
        const [count, setCount] = useState(0) // lo inicializamos en 0

        if(count > 4){
            setCount(0)    
        }

        return [count, setCount]
    } 

 const BadgeDetails = props => {
    
            //useState nos regresa un arreglo con dos posiciones, en este caso les puse de nombre count y setCount pero
              //puede ser cualquiera      
            // el [count, setCount] es parecido al state y setState
            // le podemos dar un estado inicial, en este caso pusimos 0, no es necesario poner un estado inicial.
            //aqui estariamos utilizando el hook predeterminado pero vamor a crear el nuestro con la funcion que tenemos de useIncreaseCount 
            const [count, setCount] = useIncreaseCount(4) //useState(0) 




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
                                    {/* quitar el comentario del siguiente boton para ver el ejemplo
                                    de los Hooks */}
                                    {/* <button className="btn btn-primary mr-4" onClick={() => {
                                          setCount(count + 1)  
                                    }}>
                                          Increase count {count}  
                                    </button> */}
                                    <Link to={`/badges/${id}/edit`} className="btn btn-info mb-4">
                                        Edit 
                                    </Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger" onClick={props.onOpenModal}>Delete</button>
                                        <DeleteBadgeModal  
                                                        isOpen={props.modalListOpen}
                                                        onCloseModal={props.onCloseModal}
                                                        onDeleteBadge={props.onDeleteBadge}   
                                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

  export default BadgeDetails