import React, {Component} from "react";
// react-router-dom tiene que estar siempre despues del componente de react, si no marcaria error
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout"
import Badges from "../pages/Badges"
import BadgeNew from '../pages/BadgeNew'
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"


// Los componentes funcionales se utilizan cuando no vamos a crear state estados de un componente
    const App = () => {
            return(
                <BrowserRouter>
                {/* utilizamos Switch para poder crear mas de una ruta */}
                   <Layout> 
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* el parametro exact lo ponemos porque lo que hace Route a la hora de que le llega
                            una url por get es obtener ese valor y un decir el valor que obtengo es / por lo tanto busco en mis rutas y 
                            el primero que encuentro con ese me quedo que en este caso es el de Badges pero si ahora quiero ir a /badges/new/
                            como las dos rutas inician iguales para Route eso quiere decir que es esa ruta por lo tanto agarrara la primer ruta
                            y despues la segunda  */}
                            <Route exact path="/badges/" component={Badges} /> 
                            {/* nota importante, siempre devemos de tener una ruta inicial o ruta default 
                                que es / si no marcaria error porque no encontraria como un
                                entry point para de ahi arrancar */}
                            <Route exact path="/badges/new/" component={BadgeNew} />

                             {/* componente que se rendeara en caso de que el usuario quiera acceder a una url
                              que no existe dentro de nuestra app*/}
                             <Route component={NotFound} />

                        </Switch>
                   </Layout> 
                </BrowserRouter>
            )
    }

    export default App 