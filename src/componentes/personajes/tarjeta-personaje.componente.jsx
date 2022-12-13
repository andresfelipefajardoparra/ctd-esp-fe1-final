import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personajes}) => {
    const location = useLocation().pathname
    const [favorito, setFavorito]= useState(location === "/favoritos" ? true : false);
    

    return(<>
        {personajes && personajes.map(per =>
        <div className="tarjeta-personaje" key={per.id}>
                <img src={per.image} alt={per.name} />
                    <div className="tarjeta-personaje-body">
                        <span>{per.name}</span>
                        <BotonFavorito esFavorito={favorito} personaje={personajes} onClick={setFavorito} />
                    </div>
        </div>
        )}
        </>
    )

    
       
    
    
}

export default TarjetaPersonaje;