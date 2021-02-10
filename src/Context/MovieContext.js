import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const[movies,setMovies] =useState([
        {
            name:'Harry Porter',
            price:'$30',
            id:2017
        },
        {
            name:'Game of Thrones',
            price:'$80',
            id:2009
        },
        {
            name:'Inception',
            price:'$10',
            id:2012
        }
    ]);

    return (
        <MovieContext.Provider value= {[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>  
      );
}
 
export default MovieProvider;