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
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    <div className="d-flex justify-content-center flex-wrap">

      {
        movies.map(movie =>(
          <MovieCard key={movie.id} {...movie}/>
        ))
      }
    </div>

  </div>)
};

export default Main;
