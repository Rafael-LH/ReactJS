import React,{Component} from 'react'


    const SubNavBar = props =>(
            <div className="Badges">
                <div className="Badges__hero">
                    <img className="img-fondo" src={props.stars} alt=""/>
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={props.confLogo} alt="Conf Logo"/>
                    </div>
                </div>
            </div>
    )

    export default SubNavBar