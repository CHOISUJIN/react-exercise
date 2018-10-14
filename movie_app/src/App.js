import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';
import { getCiphers } from 'tls';

class App extends Component {

  // componentWillMount(){
  //   console.log("will mount");
  // }

  // componentDidMount(){
  //   console.log("did mount");
  // }

  state = {}

  
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
     const movies =  this.state.movies.map((movie) => {
       return (
        // key에 map index쓰는 것은 좋지않음.(느림)
        <Movie 
            title={movie.title_english} 
            poster={movie.medium_cover_image} 
            genres={movie.genres} 
            synopsis={movie.synopsis}
            key={movie.id}/>
      );
    })

    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
      return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
