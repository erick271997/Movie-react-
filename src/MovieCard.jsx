import React from "react";
import './MovieCard.css';



// estas para sacar la imagenes de servido con movie.json se saco varias cosas poster_path
const MovieCard = ({movie}) =>{
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
return <li className="movieCard">
    <img className="movieImage" src={imageUrl} alt={movie.title}/>
    <div>
       {movie.title} {/* Para los nombre aparezca abajo  */}
       </div>
</li>
}

export default MovieCard;