import { useDispatch } from 'react-redux';
import { getBuscador } from '../../redux/action/personajesActions';
import './filtros.css';

const Filtros = () => {

    const dispatch = useDispatch()

    return <div className="filtros">
        <label htmlFor="name">Filtrar por nombre:</label>
        <input type="text" onChange={(e)=> dispatch(getBuscador(e.target.value))} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;