// MovieDescription.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
    
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
