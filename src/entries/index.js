import React, {Component} from "react";
import {render} from "react-dom";
import '../sass/index.scss';
import BadgeNew from '../pages/BadgeNew'

        // const jsx = (
        //     <div>
        //         <h1>Mi nombre es Rafael</h1>
        //         <p>Programador web</p>
        //     </div>
        // )

render(
    <BadgeNew />,
    document.getElementById('app')
)