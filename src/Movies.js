import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const defaultImage =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className='loading'></div>;
  }

  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { Title: title, Year: year, Poster: poster, imdbID: id } = movie;
        return (
          <Link key={id} to={`/movies/${id}`} className='movie'>
            <article>
              <img src={poster === 'N/A' ? defaultImage : poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
