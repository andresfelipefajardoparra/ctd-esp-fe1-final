import { Reducer } from "@reduxjs/toolkit";
import { PersonajesActions } from "../../types/personajes.actions";
import { Personaje } from "../../types/personajes.types";

export interface PersonajesState {
        status: 'NOTKNOWN' | 'LOADING' | 'SUCCESS' | 'ERROR';
        busqueda: string;
        personajes: Personaje[];
        favoritos: Personaje[];
        error: string | null ;


}

const initialState: PersonajesState = {
    status: 'NOTKNOWN',
    busqueda: "",
    personajes: [],
    favoritos: [],
    error: null,
}

const personajesReducer: Reducer<PersonajesState, PersonajesActions> = (state = initialState, actions) => {
    switch (actions.type) {
        case 'MOSTRAR-PERSONAJE':
            return {
                ...state,
                status: 'LOADING'
            }
        case 'MOSTRAR-PERSONAJE-SUCCESS':
            return {
                ...state,
                status: 'SUCCESS',
                personajes: actions.payload,
                error: ""
            }
        case 'MOSTRAR-PERSONAJE-ERROR':
            return {
                ...state,
                status: 'ERROR',
                personajes: [],
                error: actions.payload

            }
            case 'BUSCAR-PERSONAJE':
                return {
                    ...state,
                    status: 'LOADING'
                }
            case 'BUSCAR-PERSONAJE-SUCCESS':
                return {
                    ...state,
                    status: 'SUCCESS',
                    personajes: actions.payload,
                    error: ""
                }
            case 'BUSCAR-PERSONAJE-ERROR':
                return {
                    ...state,
                    status: 'ERROR',
                    personajes: [],
                    error: actions.payload
                }
            case 'AGREGAR-FAVORITOS':
                return {
                    ...state,
                    favoritos: [actions.payload, ...state.favoritos.filter(per => per.id !== actions.payload.id)]
                }
            case 'ELIMINAR-FAVORITOS':
                return {
                    ...state,
                    favoritos: state.favoritos.filter(per => per.id !== actions.payload.id)
                }
            case 'ELIMINAR-TODOS-FAVORITOS':
                return {
                    ...state,
                    favoritos: []
                }
        default:
            return initialState
    }
}
export default personajesReducer;
