import React, {Component} from "react";
import {render} from "react-dom";
import '../sass/index.scss';
import BadgeContainer from '../badge/container/BadgeContainer'

        // const jsx = (
        //     <div>
        //         <h1>Mi nombre es Rafael</h1>
        //         <p>Programador web</p>
        //     </div>
        // )
        let data = {
            name: 'Rafael',
            lastName: 'Lopez'
        }
render(
    <BadgeContainer data={data} />,
    document.getElementById('app')
)