import React,{Component, Fragment} from 'react'


    export default class BadgeForm extends Component{

        //tenemos que inicializar el estado de nuestro componente 
       /* state = {  //lo puedo declarar asi o vacio
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }    */

        //tambien lo podemos declarar de esta manera
        //   state = {} 

        // handleChange = e => {
        //     this.setState({
        //         [e.target.name]: e.target.value //aqui nos traemos el valor del name el cual esta haciendo cambios/ingresando datos en el formulario
        //     })
        // }    
        handleClick = e => {
            e.preventDefault()

            // let validaString = /^([a-z]+\s?)*$/i
            // let {firstName, lastName} = this.state

            // if(!validaString.test(firstName) || !validaString.test(lastName)){
            //        console.log('En los campos de fist name y las name, solo pudes ingresar caracteres')
            //        return false; 
            // }else{
            //     console.log(`Registro realizado correctamente. Los valores son los siguientes`)
            //     console.log(this.state)
            // }
        }
            render(){
                
                // esto se le llama componentes controlados, ya que los valores me los manda mi componente BadgeNew
                // de ese componente estoy recibiendo todo
                
                let {onChange, handleClick, onSubmit, error, messageErr} = this.props
                let {firstName, lastName, email, jobTitle, twitter} = this.props.formValues

                return(
                    //con React Fragment lo que hacemos es no escribir div innecesarios solo para poder renderear mas de una cosa   
                    <Fragment>
                        <form onSubmit={onSubmit} >
                            <div className="form-group">
                                <label>First Name</label>
                                <input 
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={firstName}
                                    placeholder="First Name" />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input 
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={lastName}
                                    placeholder="Last Name" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    onChange={onChange}
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    placeholder="Email" />
                            </div>
                            
                            <div className="form-group">
                                <label>Job title</label>
                                <input 
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    name="jobTitle"
                                    value={jobTitle}
                                    placeholder="Job title" />
                            </div>

                            <div className="form-group">
                                <label>Twitter</label>
                                <input 
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    name="twitter"
                                    value={twitter}
                                    placeholder="Twitter" />
                            </div>

                            <button onClick={handleClick} className="btn btn-info mb-4">Save</button>
                            {
                                error &&
                                <div className="container-danger">
                                    <p className="btn btn-danger">{messageErr}</p>
                                </div>
                            }
                        </form>
                    </Fragment>
                )
            }
    }