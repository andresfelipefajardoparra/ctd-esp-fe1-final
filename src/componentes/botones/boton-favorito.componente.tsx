import { useDispatch } from 'react-redux';
import { agregarFavoritos, eliminarFavoritos } from '../../redux/action/personajesActions';
import { Personaje } from '../../types/personajes.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

interface Props {
    personaje: Personaje | undefined;
    esFavorito: boolean;
  }
  interface OnClick {
    onClick: (isFavorite: boolean) => void;
  }
  
  type IFavoriteProps = Props & OnClick;


const BotonFavorito = ({esFavorito, onClick, personaje}: IFavoriteProps) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    const dispatch = useDispatch();

    const handleFav = () => {
        if(esFavorito) {
            dispatch(eliminarFavoritos(personaje))
        } else {
            onClick(!esFavorito);
            dispatch(agregarFavoritos(personaje))
        }
    }

    return <div className="boton-favorito" onClick={handleFav}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;