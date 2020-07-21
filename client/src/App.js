import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const nothing = []

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <BrowserRouter>
        <Link to='/movielist'>Movie List</Link>
        <Link to='/movie'>Movie</Link>

        <Route path='/movielist' component={MovieList} />
        <Route to='movies/:id' component={Movie}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
