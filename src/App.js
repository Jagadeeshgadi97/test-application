import React from "react";
import './index.css'
import { useState,useEffect } from "react";
import MovieCard from "./MovieCard";

const App = () => {

  const API_SEARCH='https://api.themoviedb.org/3/search/movie?api_key=0ccd52bc7ebc8d28fb8810f62c360d04&language=en-US&page=1&include_adult=false'

const [movies,setMovies]=useState([])
const[search,setSearch]=useState([])

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=0ccd52bc7ebc8d28fb8810f62c360d04&language=en-US&page=1')
	.then(response => response.json())
	.then(response => setMovies(response.results))
	.catch(err => console.error(err));
},[])
console.log(movies);

const handleSearch=(e)=>{
e.preventDefault();
fetch(API_SEARCH + search)
.then(response=>response.json())
.then(res=>setMovies(res.results))
}
  
  return (
    <div className="App">
      <div className="search__nav">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="movies">
        
        {movies.map((movie,index)=>{
          return <MovieCard key={index} {...movie}/>
        })}
        
      </div>
    </div>
  );
};

export default App;
