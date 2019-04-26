import React, {Component} from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Badges from "../pages/Badges";
import BadgeNew from '../pages/BadgeNew'

// Los componentes funcionales se utilizan cuando no vamos a crear state estados de un componente
    function App(){
            return(
                <div>
                    <h1>Hola Mundo</h1>
                    <BrowserRouter>
                        <Switch>
                            <Router>
                                <Route exact path="/badges" component={Badges} />
                            </Router>
                        </Switch>
                    </BrowserRouter>
                </div>
            )
    }

    export default App 