import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  // componentWillMount(){
  //   console.log("will mount");
  // }

  // componentDidMount(){
  //   console.log("did mount");
  // }

  state = {
  }

  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies : [
        {
          title : "Matrix",
          poster : "https://images-na.ssl-images-amazon.com/images/I/813dE2pH7XL._SY355_.jpg"
        },
        {
          title : "Full Metal Jacket",
          poster : "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
        },
        {
          title : "Oldboy",
          poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
        },
        {
          title : "Star wars",
          poster : "https://lumiere-a.akamaihd.net/v1/images/star-wars-stacked-tall_0b1bb1c0.jpeg?region=0%2C0%2C1536%2C864&width=320"
        },
        {
          title: "Trainsportting",
          poster: "https://uproxx.files.wordpress.com/2017/03/vd-trainspotting-620x349-jpg.jpeg?quality=95&w=650"
        }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
     const movies =  this.state.movies.map((movie, index) => {
      return (
        <Movie title={movie.title} poster={movie.poster} key={index}/>
      );
    })

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
