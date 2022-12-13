import { Action } from "@reduxjs/toolkit";
import { Personaje } from "./personajes.types";

export interface MostrarPersonajesAction extends Action {
  type: 'MOSTRAR-PERSONAJE';

}

export interface MostrarPersonajesSuccessAction extends Action {
  type: 'MOSTRAR-PERSONAJE-SUCCESS';
  payload: Personaje[];
}

export interface MostrarPersonajesErrorAction extends Action {
  type: 'MOSTRAR-PERSONAJE-ERROR';
  payload: string;
}

export interface BuscarPersonajesAction extends Action {
  type: 'BUSCAR-PERSONAJE';
  payload: string;
}

export interface BuscarPersonajesSuccessAction extends Action {
  type: "BUSCAR-PERSONAJE-SUCCESS";
  payload: Personaje[];
}

export interface BuscarPersonajesErrorAction extends Action {
  type: "BUSCAR-PERSONAJE-ERROR";
  payload: string;
}

export interface AgregarFavoritosAction extends Action {
  type: 'AGREGAR-FAVORITOS';
  payload: Personaje;
}
export interface EliminarFavoritosAction extends Action {
  type: 'ELIMINAR-FAVORITOS',
  payload: Personaje;
}

export interface EliminarTodosFavoritosAction extends Action {
  type: 'ELIMINAR-TODOS-FAVORITOS',
}

export type PersonajesActions =
  | MostrarPersonajesAction
  | MostrarPersonajesSuccessAction
  | MostrarPersonajesErrorAction
  | BuscarPersonajesAction
  | BuscarPersonajesSuccessAction
  | BuscarPersonajesErrorAction
  | AgregarFavoritosAction
  | EliminarFavoritosAction
  | EliminarTodosFavoritosAction
