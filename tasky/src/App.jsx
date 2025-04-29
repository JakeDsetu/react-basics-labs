import './App.css';
import Movie from './components/movie';
import React, { useState, useEffect } from 'react';
import AddMovieForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import {getMovies, addMovie, deleteMovie, updateMovie} from "./api/movie-api";




function App() {
  const [ movieState, setMovieState ] = useState({movies: []});

useEffect(() => {
    getMovies().then(movies => {
      setMovieState({movies: movies});
    });
  }, []);	

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    release_date: "",
    language: ""
  });



  const favoriteHandler = (movieIndex) => {
    const movies = [...movieState.movies];
    movies[movieIndex].favorite = !movies[movieIndex].favorite;
    updateMovie(movies[movieIndex]);
    setMovieState({movies});
  }


  const deleteHandler = (movieIndex) => {
    const movies = [...movieState.movies];
    const id=movies[movieIndex]._id;
    movies.splice(movieIndex, 1);
    deleteMovies(id);
    setMovieState({movies});
  }


  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "release_date":
          form.deadline = event.target.value;
          break;
      case "language":
          form.priority = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }
  console.log(formState);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const movies = movieState.movies?[...movieState.movies]:[];
    const form = {...formState};
    const newMovie = await addMovie(form);
    movies.push(newMovie);
    setMovieState({movies});
  }



  return (
    <div className="container">
      <h1>Movies</h1>
      {movieState.movies.map((movie, index) => (              
    <Movie
      title={movie.title}
      description={movie.description}
      deadline={movie.deadline}
      priority={movie.priority}
      key={movie._id}        
      favourite={movie.favorite}
      markFavorite={() => favoriteHandler(index)}
      deleteMovie = {() => deleteHandler(index)}
    />
  ))}
         <AddMovieForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );

}


export default App;
