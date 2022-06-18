import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Page</h1>
  {movies.map(movie => <div key={movie.title}><h1>{movie.title}</h1><br/>Runtime: {movie.time}<ul>
   { movie.genres.map(genre => <li key={genre}>{genre}</li>)}
   
   </ul></div>)}
  </div>;
}

export default Movies;
