import React,{Component, Fragment, useState, useMemo} from "react";
import {Link} from 'react-router-dom'

//components 
import BadgesListItem from './BadgesListItem'

 const useSearchBadges = badges => {
            // La ventaja de usar useMemo es que memoriza una busqueda que haya echo y de esta manera no generamos el
            // cuello de botella. si nosotros buscamos angel y una vez encontrado la proxima vez que lo volvamos a buscar
            // memo memoriza los parametros que ingresamos al hacer la busqueda de angel y cuando empecemos a ingresar los 
            // mismos parametros lo que hace memo es retornar la busqueda antes realizada con esos mismos parametros
             
            //hook
            let [query, setQuery] = useState('')  
            //creamos otro hook para guardar el arreglo actualizado que nos retornara filter 
            let [filteredBadges, setFilteredBadges] = useState(badges)

            //utilizo el manejador de eventos filter, filter lo que hace es permitirnos filtrar
            //valores los caules todos aquellos valores que coincidan con los parametros indicados lo que hara es retornarnos 
            //un nuevo arreglo con valores actualizados, ye se arreglo lo estoy guardando en el state filteredBadges
            useMemo(() => { //primer argumento de useMemo 
                    //guardamos el arreglo actualizado para mandarlo a nuestro satate que es setFilteredBadges
                    let result = badges.filter(badge => {
                    // todos aquellos datos que coincidan con los valores ingresado en mi input el cual los valores los estoy 
                    // guardando a setQuery y se lo paso a query que es ese el que va llevando los valores que voy ingresando 
                    // en mi input, seran guardados en el nuevo arreglo, el cual lo estoy guardando en filteredBadges 
                    return `${badge.firstName.toLowerCase()} ${badge.lastName.toLowerCase()}`.includes(query.toLowerCase() )
            
            })//cierre del manejador de arreglos filter

            setFilteredBadges(result)

            // useMemo recibe dos argumentos, el primero es una funcion anomina y segundo argumento es una lista
            // en esa lista recibe dos argumentos que son query y badges, si badges o query cambian se vuelve a calcular la lista
        },[badges, query] ) //cierrer useMemo   

        return {query, setQuery, filteredBadges}
 }   

 const BadgesList = props => {

               let {query, setQuery, filteredBadges} = useSearchBadges(props.data)

                if(filteredBadges.length === 0){
                    return(
                        <Fragment>
                            <div className="form-group">
                                <label>Filter Badges</label>  
                                <input type="text"
                                        placeholder="Search"
                                        className="form-control"
                                        name="search"
                                        value={query}
                                        onChange={e => {
                                            setQuery(e.target.value)
                                            // console.log(e.target.value)
                                        }}
                                />
                            </div>  
                            <div className="container-info">
                                <b> 
                                    <span>No Badges were found</span>
                                    <Link to="/badges/new/" >
                                        Click aqui para crear uno :)
                                    </Link>
                                </b>
                            </div>
                        </Fragment>
                    )
                }
                return(
                    <Fragment>
                        <div className="form-group">
                              <label>Filter Badges</label>  
                              <input type="text"
                                    placeholder="Search"
                                    className="form-control"
                                    name="search"
                                    value={query}
                                    onChange={e => {
                                        setQuery(e.target.value)
                                        // console.log(e.target.value)
                                    }}
                              />
                        </div>    
                        <ul className="list-unstyled" >
                                {
                                    filteredBadges.map(badge => {
                                        return(
                                            <li key={badge.id} className="container-li">
                                                <BadgesListItem badge={badge} />
                                            </li>
                                        )
                                    })
                                } 
                        </ul>
                    </Fragment>
                )
    }

export default BadgesList