export default function selectors(globalState) {
  const state = globalState.peliculas;
  const getPeliculas = () => state.getPeliculasFetchStatus?.payload;
  const getPeliculasStatus = () => state.getPeliculasFetchStatus?.status;
  
  return {
    getPeliculas,
    getPeliculasStatus,
  };
}
