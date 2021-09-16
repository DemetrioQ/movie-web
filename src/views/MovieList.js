import { useEffect, useState } from 'react';
import Movie from './movie';
import PageWrapper from './PageWrapper';
import Pagination from './Pagination';

function MovieList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const MOVIES_PER_PAGE = 7;

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async () => {
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';

    let result = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'splication/json',
        Origin: 'https://lucasmoy.dev/',
      },
    });
    let json = await result.json();
    setMovies(json);
  };

  const getTotalPages = () => {
    let moviesTotalCount = movies.length;
    return Math.ceil(moviesTotalCount / MOVIES_PER_PAGE);
  };

  let moviesPerPage = movies.slice((currentPage - 1) * MOVIES_PER_PAGE, currentPage * MOVIES_PER_PAGE);

  return (
    <PageWrapper>
      {moviesPerPage.map((movie) => (
        <Movie title={movie.titulo} rating={movie.calificacion} director={movie.director} actors={movie.actores} date={movie.fecha} runtime={movie.duracion} img={movie.img}>
          {movie.descripcion}
        </Movie>
      ))}

      <Pagination
        page={currentPage}
        total={getTotalPages()}
        onChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </PageWrapper>
  );
}

export default MovieList;
