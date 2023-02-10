import './App.css';
import { getMovieList, searchMovie} from "./api"
import { useEffect, useState } from 'react';

const App = () => {

  const [poplarMovies, setPopularMovies] = useState ([])

  useEffect (() => {
   getMovieList().then((result) => {
     setPopularMovies(result)
   })
  }, [])

  const PopularMovieList = () => {
    return poplarMovies.map((movie, i) =>{
      return (
      
         
          <div className="Movie-wrapper" key={i}>
               <div className="Movie-title"> {movie.title} </div>
               <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
               <div className="Movie-date">Release : {movie.release_date}</div>
               <div className="Movie-rate">Rating : {movie.vote_average}</div>
         </div> 
        
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3 ) {
   const query = await searchMovie(q)
   setPopularMovies(query.results)
    
  }
  }

  console.log({setPopularMovies: poplarMovies})

  return (
    <div className="App">
      <header className="App-header">
      <button className="Tombol-login" type="submit">LOGIN</button>
       <h1>Millennia Movie</h1>
       
       <input 
       placeholder="Cari Film . ." 
       className="Movie-search"
       onChange={({ target }) => search(target.value)} 
       />
       <div className="Movie-container">
        
            <div className="Movie-container">
               <PopularMovieList/> 
            </div>  

            


        </div>
      </header>
    </div>
  );
}

export default App;
