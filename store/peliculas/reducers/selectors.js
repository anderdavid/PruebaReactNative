export default function selectors(globalState) {
  const state = globalState.Peliculas;
  const getPeliculas = () => state.payload;
  const getPeliculasStatus = () => state.getPeliculasFetchStatus.status;
  
  return {
    getPeliculas,
    getPeliculasStatus,
  };
}
