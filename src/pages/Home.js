import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
         <div className="container_home"> 
                <div className="container_information_home">
                    <span>Badge management system </span>
                    <Link to="/badges/" className="go btn btn-outline-info mt-3">
                            Click to start   
                    </Link>
                </div>
         </div>   
    );
  }
}