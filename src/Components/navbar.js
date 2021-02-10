import React,{useContext} from 'react';
import {MovieContext} from '../Context/MovieContext';

const NavBar = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return ( 
        <div>
        <h1>MoviesClub</h1>
        <p>Number of movies: {movies.length} </p>
        </div>
     );
}
 
export default NavBar;