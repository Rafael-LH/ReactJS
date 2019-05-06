import React, {Component} from 'react'
import md5 from 'md5'

    const Gravatar = props => {
            let email = props.email
             //la dependencia md5 lo que hace es convertir el email en un has el cual lo mandamos a
            //Gravatar para traernos nuestro avatar siempre y cuando estemos dados de alta en Gravatar
            let hash = md5(email)  
            
            return(
                    <img className={props.className}  id="avatarUrl" src={`https://gravatar.com/avatar/${hash}?id=identicon`} alt="Avatar"/>   
            )
    }

    export default Gravatar