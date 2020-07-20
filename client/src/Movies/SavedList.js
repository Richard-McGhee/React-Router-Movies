import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <BrowserRouter>
      <Link to='/'>
        <div className="home-button">Home</div>
      </Link>
      <Route exact path='/' component={App}/>
    </BrowserRouter>
  </div>
);

export default SavedList;
