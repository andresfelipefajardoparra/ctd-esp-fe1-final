import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonaje } from '../redux/action/personajesActions';
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getPersonaje())
        },[dispatch])
        const {personajes} = useSelector(state => state.personajes)
        const {results, next, prev} = personajes
        
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion next={next} prev={prev}/>
        <GrillaPersonajes personajes = {results}/>
        <Paginacion next={next} prev={prev}/>
    </div>
}

export default PaginaInicio