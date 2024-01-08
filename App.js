
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDescription from './MovieDescription';



const App = () => {
  const [movies ] = useState([
    { title: 'Inception', trailerLink:'https://youtu.be/HcoZbHBDHQA',description: 'A mind-bending movie', posterURL:'https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg' , rating: 9 },
    {title: 'Her', trailerlink:'https://youtu.be/dJTU48_yghs'; description:'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.' , posterURL:'https://th.bing.com/th/id/R.20218f1ff5f4103387e56e208c45be1e?rik=kjujErKOA8dNiw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-8xyykZNi9p0%2fVgr8feW7rJI%2fAAAAAAAABzg%2fQXGK9-XoVLo%2fs320%2fHer.jpg&ehk=vjW89XBGiTBmBTVWN66ROCvwNymypiEFKZ2BuPHRS2k%3d&risl=&pid=ImgRaw&r=0',rating : 6 },
    { title: 'titanic', trailerLink:'https://youtu.be/I7c1etV7D7g' ,description: 'Romance ', posterURL: 'https://th.bing.com/th/id/R.232e10e134cf1d24f10dae39073377d7?rik=EgnRU4Re8fGtBA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31600000%2fTitanic-movie-couples-31658924-1089-1600.jpg&ehk=Ntn2muOSrQUsckn28S94m%2fllkulebOMRgZya6enVBfY%3d&risl=&pid=ImgRaw&r=0', rating: 10 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (title) => {
    setTitleFilter(title);
    filterMovies(title, ratingFilter);
  };

  const handleRatingChange = (rating) => {
    setRatingFilter(rating);
    filterMovies(titleFilter, rating);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rating || movie.rating >= parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="app">
        <h1>My Movie App</h1>
        <Switch>
          <Route exact path="/">
            <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
            <MovieList movies={filteredMovies} />
          </Route>
          <Route path="/movie/:title">
            <MovieDescription movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
