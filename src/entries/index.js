import React, {Component} from "react";
import {render} from "react-dom";
import '../sass/index.scss';
import Badges from '../pages/Badges'

        // const jsx = (
        //     <div>
        //         <h1>Mi nombre es Rafael</h1>
        //         <p>Programador web</p>
        //     </div>
        // )

render(
    <Badges />,
    document.getElementById('app')
)