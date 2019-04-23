import React,{Component} from 'react'


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
          state = {} 

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value //aqui nos traemos el valor del name el cual esta haciendo cambios/ingresando datos en el formulario
            })
        }    
        handleClick = e => {
            e.preventDefault()
            let validaString = /^([a-z]+\s?)*$/i
            let {firstName, lastName} = this.state

            if(!validaString.test(firstName) || !validaString.test(lastName)){
                   console.log('En los campos de fist name y las name, solo pudes ingresar caracteres')
                   return false; 
            }else{
                console.log(`Registro realizado correctamente. Los valores son los siguientes`)
                console.log(this.state)
            }
        }
            render(){
                return(
                    <div>
                        <h1>New Attendant</h1>
                        <form>
                            <div class="form-group">
                                <label>First Name</label>
                                <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={this.state.firstName}
                                    placeholder="First Name" />
                            </div>

                            <div class="form-group">
                                <label>Last Name</label>
                                <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={this.state.lastName}
                                    placeholder="Last Name" />
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <input 
                                    onChange={this.handleChange}
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Email" />
                            </div>
                            
                            <div class="form-group">
                                <label>Job title</label>
                                <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    name="jobTitle"
                                    value={this.state.jobTitle}
                                    placeholder="Job title" />
                            </div>

                            <div class="form-group">
                                <label>Twitter</label>
                                <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    name="twitter"
                                    value={this.state.twitter}
                                    placeholder="Twitter" />
                            </div>

                            <button onClick={this.handleClick} className="btn btn-info">Save</button>
                        </form>
                    </div>
                )
            }
    }