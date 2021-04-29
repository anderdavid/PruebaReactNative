import { connect } from 'react-redux';
import Peliculas from './Peliculas';
import {
  getPeliculas,
} from '../../store/peliculas/actions';
import selectors from '../../store/peliculas/reducers/selectors';

const mapStateToProps = (state) => {
  const selector = selectors(state);
  const status = selector.getPeliculasStatus();

  const peliculas = selector.getPeliculas();
  /* const pelicula = selector.getPeliculaPayload();
  const peliculaStatus = selector.getPeliculaStatus();
  const addPeliculaStatus = selector.addPeliculaStatus();
  const addPeliculaMsg = selector.addPeliculaMsg();
  const putPeliculaStatus = selector.putPeliculaStatus();
  const putPeliculaMsg = selector.putPeliculaMsg();
  const removePeliculaStatus = selector.removePeliculaStatus();
  const removePeliculaMsg = selector.removePeliculaMsg(); */

  return {
    status,
    peliculas,
    /* pelicula,
    peliculaStatus,
    addPeliculaStatus,
    addPeliculaMsg,
    putPeliculaStatus,
    putPeliculaMsg,
    removePeliculaStatus,
    removePeliculaMsg */
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeliculas: (payload) => dispatch(getPeliculas(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas);