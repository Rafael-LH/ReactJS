import React, {Component} from "react";
import {render} from "react-dom";
import BadgeContainer from '../badge/container/BadgeContainer'

        // const jsx = (
        //     <div>
        //         <h1>Mi nombre es Rafael</h1>
        //         <p>Programador web</p>
        //     </div>
        // )

render(
    <BadgeContainer name="Badge"/>,
    document.getElementById('app')
)