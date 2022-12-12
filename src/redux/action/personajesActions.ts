import axios from "axios"
import { any } from "prop-types"
/**
 *  
 */
const pedirPersonaje = () => {
    return {
        type: 'MOSTRAR-PERSONAJE'
    }
}
/**
 * 
 * @param personajes 
 * @returns 
 */
const pedirPersonajeSuccess = (personajes: any) => {
    return {
        type: 'MOSTRAR-PERSONAJE-SUCCES',
        payload: personajes
    }
}
/**
 * 
 * @param error 
 * @returns 
 */
const pedirPersonajeError = (error: any) => {
    return {
        type: 'MOSTRAR-PERSONAJE-ERROR',
        payload: error
    }
}

/**
 * 
 * @returns 
 */
const pedirPagina = () => {
    return{
        type: 'PAGINA-PERSONAJE'
    }
    
}

const pedirPaginaSuccess = (paginacion: any) => {
    return {
        type: 'PAGINA-PRESONAJE-SUCCESS',
        payload: paginacion
    }
}

const pedirPaginaError = (error: any) => {
    return {
        type: 'PAGINA-PERSONAJE-ERROR',
        error: error
    }
}

const buscarPersonaje = (name: string)=> {
    return {
        type: 'BUSCAR-PERSONAJE' ,
        payload : name
    }
} 

const buscarPersonajeSuccess = (personaje: any)=> {
    return {
        type: 'BUSCAR-PERSONAJE-SUCCESS' ,
        payload : personaje
    }
} 

const buscarPersonajeError = (error: string)=> {
    return {
        type: 'BUSCAR-PERSONAJE-ERROR' ,
        payload : error
    }
} 

export const getBuscador = (name: string) =>{
    return  (dispatch: any )  =>{ 
        let param = '?'
        if (name){
            param += `name=${name}`
        }
                dispatch(buscarPersonaje())
            axios.get(`https://rickandmortyapi.com/api/character${param}`)
            .then(res =>  { 
                const {info, results} = res.data
                const {next, prev} = info
                 dispatch(buscarPersonajeSuccess({results, next, prev}))})
            .catch (error=> {
                const {mensage} = error
            dispatch(buscarPersonajeError(mensage))
            })



export const getPersonaje = (page?: string) =>{
    return (dispatch: any) =>{
        if(page === undefined)
        page= 'https://rickandmortyapi.com/api/character/';
        dispatch(pedirPersonaje())
        axios.get(page)
        .then(res =>  {
                const {info, results} = res.data
                const {next, prev} = info
                 dispatch(pedirPersonajeSuccess({ results, next, prev}))})
        .catch (error=> {
            const {mensage} = error
        dispatch(pedirPersonajeError(mensage))
        })
    }
}