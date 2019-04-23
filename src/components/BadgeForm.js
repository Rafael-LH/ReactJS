import React,{Component} from 'react'


    export default class BadgeForm extends Component{

        handleChange = e => {
            console.log(e.target.name);
        }    
        handleClick = e => {
            e.preventDefault()
             console.log('Evento click')   
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
                                    placeholder="First Name" />
                            </div>
                            <button onClick={this.handleClick} className="btn btn-info">Save</button>
                        </form>
                    </div>
                )
            }
    }