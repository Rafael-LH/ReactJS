import React,{Component, Fragment} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

     const Layout = props =>{
         /* const children = props.children */
         return(
            //con React Fragment lo que hacemos es no escribir div innecesarios solo para poder renderear mas de un elemento   
             <Fragment>
                <NavBar />
                    {/*me traigo todos mis hijos, este componente lo importe en App.js 
                    ahi pongo mi componente <Layout> aqui va a ir las rutas de mis componenetes que cambian </Layout>
                    en medio que es lo unico que casi siempre cambia en una app, rendereo el componente
                    al que corresponda la ruta y de esta manera es como se crea un componente */}
                    {props.children}
                {/* <Footer />     */}
             </Fragment>
         )
     }   

export default Layout