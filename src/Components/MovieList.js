import React,{ useState,useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from '../Context/MovieContext';


const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return ( 
      <div>
          {movies.map(({id,...otherSectionProps}) =>(
              <Movie key={id} {...otherSectionProps} />
          ))}
      </div>
     );
}
 
export default MovieList;