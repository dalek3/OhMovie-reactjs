import React from 'react';
import './Movie.css'

function Movie({title, poster_path, overview}) {
    return (
        <div>
            <MoviePoster poster_path = {poster_path}/>
            {/* <h3>{title}</h3> */}
            {/* <p>{overview}</p> */}
        </div>
    )
}

function MoviePoster({poster_path}) {
    return (
        <div className="poster">
            <img src={"//image.tmdb.org/t/p/w185_and_h278_bestv2/" + poster_path} alt="MoviePoster"/>
        </div>
    )
}

export default Movie;