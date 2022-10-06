import React from "react";
import moviejson from './movies.json'; //link https://gist.github.com/ymulenll/e9bcdee18151d17ba745b0d93d447359, aqui comienza todo lo de API de la pelicula 
import MovieCard from './MovieCard';
import './MoviesGrid.css';

// este archivo jeison es crea con como esta aque se va a sacr la pelicula como de API es decir como en servido de la nuves se crea asi y lo pones aqui ya que tiene las equietas de las peliculas

const MoviesGrid =() =>{
    return(
        <ul className="moviesGrid">
            {moviejson.map((movie) => {
               return <MovieCard key={movie.id} movie={movie}/>





               
              /*  Cualquieras de las 2 funcionas  */

          /*   {moviejson.map(function(moviejson){
               return <li>{moviejson.title}</li> */
            })}
        </ul>
        
      /*   Se crea asi ya que se traje de la nuve los nombre de la peliculas moviejson como una apli no se crea etiqueta li o ul se crea como en funciones y aparece como se ve  */
    );
}

export default MoviesGrid;