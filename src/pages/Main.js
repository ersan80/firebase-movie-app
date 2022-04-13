<<<<<<< HEAD
import React,{useEffect,useState,useContext} from "react";
import axios from "axios"
import MovieCard from "../components/MovieCard";
import { createUser } from "../auth/firebase";

import { AuthContext } from "../context/AuthContext";


//const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


const Main = () => {
const {currentUser} = useContext(AuthContext)
  const [movies,setMovies] = useState([])
  const[searchTerm,setSearchTerm] = useState()

  const handleSubmit = (e)=>{

    e.preventDefault()
    

    if(searchTerm&&currentUser){
      getMovies(SEARCH_API + searchTerm)
    } else if(!currentUser){
      alert("Please log in search movie")
    } else{
      alert("please enter a text")
    }


  }

  useEffect(() => {

    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API)=>{
    axios.get(API).then((res)=>setMovies(res.data.results)).catch((error) => console.log(error))
  }

  
  return( 
  <div>
     <form className="search" onSubmit={handleSubmit}>
=======
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

// const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      alert("Please log in to search a movie");
    } else {
      alert("Please enter a text");
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
>>>>>>> b56cc861ebf91c757180bef6b050ee945ba48adb
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
<<<<<<< HEAD
    <div className="d-flex justify-content-center flex-wrap">

      {
        movies.map(movie =>(
          <MovieCard key={movie.id} {...movie}/>
        ))
      }
    </div>

  </div>)
=======
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
>>>>>>> b56cc861ebf91c757180bef6b050ee945ba48adb
};

export default Main;
