import React, {useState} from 'react';  
import Movie from './Movie';  
import ImageOne from "../Images/GoodFellas.jpg"
import ImageTwo from '../Images/Blow.jpg'
import ImageThree from '../Images/AG.jpg'
import ImageFour from '../Images/Casino.jpg'
import ImageFive from '../Images/Friday.jpg'


const MovieList = () => {  // Define functional component named App
    const [movies, setMovies] = useState([  // Using useState hook to initialize state
      {
        id: 1,
        title: 'Goodfellas',
        image: ImageOne,
        director: 'Martin Scorsese',
        staring: 'Robert De Niro',
        synopsis: 'A young man grows up in the mob and works very hard to advance himself through the ranks.',
        rating: "R",
        reviews: [],
      },
      {
        id: 2,
        title: 'Blow',
        image: ImageTwo,
        director: 'Ted Demme',
        starring: 'Johnny Depp, Ray Liotta',
        synopsis: 'In the turbulence of the 1970s, the international drug trade underwent a fast, violent and lucrative revolution', 
        rating: "R",
        reviews: [],
      },
      {
        id: 3,
        title: 'American Gangster',
        image: ImageThree,
        director: 'Ridley Scott',
        starring: 'Denzel Washington, Russel Crowe',
        synopsis: 'Harlem drug dealer Frank Lucas rises to power in corrupt 1970s New York, equalling and surpassing the notorious Mafia families with the reach of his empire',
        rating: "R",
        reviews: [],
      },
      {
        id: 4,
        title: 'Casino',
        image: ImageFour,
        director: 'Martin Scorsese',
        starring: 'Robert De Niro, Joe Pesci, Sharron Stone, Frank Vincent',
        synopsis: 'In early-1970s Las Vegas, low-level mobster Sam "Ace" Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino',
        rating: "R",
        reviews: [],
      },
      {
        id: 5,
        title: 'Friday',
        image: ImageFive,
        director: 'F. Gary Gray',
        starring: 'Ice Cube, Chris Tucker ',
        synopsis: 'Its Friday, and Craig and Smokey must come up with $200 they owe a local bully or there wont be a Saturday.',
        rating: "R",
        reviews: [],
      },
    ]);
    console.log(movies)
    return (
      <div>
        
        <div className="movieContainers">
        <div className="row">
        {movies && movies.map(movie => (
           <div className='col-4 m-2' key={movie.id}>
          <Movie key={movie.id + movie.title} movie={movie} />
          </div>
        ))}
        </div>  
        </div>
        </div>
     );
  };
  
  export default MovieList;
    
    
  
    
  
 