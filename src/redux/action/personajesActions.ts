import { ActionCreator, ThunkAction } from "@reduxjs/toolkit"
import axios from "axios"
import { AgregarFavoritosAction, BuscarPersonajesAction, BuscarPersonajesErrorAction, BuscarPersonajesSuccessAction, MostrarPersonajesAction, MostrarPersonajesErrorAction, MostrarPersonajesSuccessAction, PersonajesActions, EliminarFavoritosAction, EliminarTodosFavoritosAction } from "../../types/personajes.actions"
import { Personaje } from "../../types/personajes.types"
import { IRootState } from "../store"

const pedirPersonaje: ActionCreator<MostrarPersonajesAction> = () => {
    return {
        type: 'MOSTRAR-PERSONAJE'
    }
}

const pedirPersonajeSuccess: ActionCreator<MostrarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: 'MOSTRAR-PERSONAJE-SUCCESS',
        payload: personajes
    }
}

const pedirPersonajeError: ActionCreator<MostrarPersonajesErrorAction> = (error: string) => {
    return {
        type: 'MOSTRAR-PERSONAJE-ERROR',
        payload: error
    }
}
const buscarPersonaje: ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return{
        type: 'BUSCAR-PERSONAJE',
        payload: name
    }

}

const buscarPersonajeSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: 'BUSCAR-PERSONAJE-SUCCESS',
        payload: personajes
    }
}

const buscarPersonajeError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: 'BUSCAR-PERSONAJE-ERROR',
        payload: error
    }
}

export const agregarFavoritos: ActionCreator<AgregarFavoritosAction> = (favoritos: Personaje)=>{
    return{
        type: 'AGREGAR-FAVORITOS',
        payload: favoritos
    }
}

export const eliminarFavoritos: ActionCreator<EliminarFavoritosAction> = (favoritos: Personaje)=> {
    return{
        type: 'ELIMINAR-FAVORITOS',
        payload: favoritos
    }
}

export const eliminarTodosFavoritos: ActionCreator<EliminarTodosFavoritosAction> = ()=> {
    return {
    type: 'ELIMINAR-TODOS-FAVORITOS'
    }
}

interface GetPersonajeThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesActions>{};

export const getBuscador = (name: string): GetPersonajeThunkAction =>{
    return (dispatch) =>{
        let param = "?"
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


    }
}

export const getPersonaje = (page?: string): GetPersonajeThunkAction =>{
    return (dispatch) =>{
        if(page === undefined)
        page= 'https://rickandmortyapi.com/api/character/';
        dispatch(pedirPersonaje())
        axios.get(page)
        .then(res =>  {
                const {info, results} = res.data
                const {next, prev} = info
                 dispatch(pedirPersonajeSuccess({results, next, prev}))})
        .catch (error=> {
            const {mensage} = error
        dispatch(pedirPersonajeError(mensage))
        })
    }
}
