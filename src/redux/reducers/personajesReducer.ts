/**
 * 
 */

interface Reducer {
    initialState: {
        loading: boolean;
        personajes: [];
        error: null;
    },
    actions: {
        type: 'MOSTRAR-PERSONAJE' | 'MOSTRAR-PERSONAJE-SUCCES' | 'MOSTRAR-PERSONAJE-ERROR' | 'PAGINA-PERSONAJE' | 'PAGINA-PERSONAJE-SUCCESS' | 'PAGINA-PERSONAJE-ERROR' | 'BUSCAR-PERSONAJE'| 'BUSCAR-PERSONAJE-SUCCESS' | 'BUSCAR-PERSONAJE-ERROR'
        payload?: []
    }

}

const initialState: Reducer['initialState'] = {
    loading: false,
    personajes: [],
    error: null
}
/**
 * 
 * @param state 
 * @param actions 
 * @returns 
 */
export const personajesReducer = (state = initialState, actions: Reducer['actions']) => {
    switch (actions.type) {
        case 'MOSTRAR-PERSONAJE':
            return {
                ...state,
                loading: true
            }
        case 'MOSTRAR-PERSONAJE-SUCCES':
            return {
                ...state,
                loading: false,
                personajes: actions.payload,
                error: null
            }
        case 'MOSTRAR-PERSONAJE-ERROR':
            return {
                ...state,
                loading: false,
                personajes: null,
                error: actions.payload
                
            }
            case 'PAGINA-PERSONAJE':
                return {
                    ...state,
                    loading: true
                }
            case 'PAGINA-PERSONAJE-SUCCES':
                return {
                    ...state,
                    loading: false,
                    personajes: actions.payload,
                    error: null
                }
            case 'PAGINA-PERSONAJE-ERROR':
                return {
                    ...state,
                    loading: false,
                    personajes: null,
                    error: actions.payload
                }
        
        default:
            return initialState
    }
}