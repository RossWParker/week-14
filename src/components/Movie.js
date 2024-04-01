import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

// Functional component Movie
const Movie = ({ movie, onReviewSubmit }) => {

  // Define state variables for new review and rating
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  // Event handler for changing the review input
  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  // Event handler for changing the rating
  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  }; // <-- Added closing curly brace here

  // Event handler for submitting the review
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Call onReviewSubmit function with movie id, new review, and rating
    onReviewSubmit(movie.id, newReview, rating);

    // Clear new review and reset rating
    setNewReview('');
    setRating(0);
  };

  
  return (
    <div className="movie">

      {/* Display movie image */}
      <img src={movie.image} alt={movie.title} width="300px" />

      {/* Display movie title */}
      <h2>{movie.title}</h2>

      {/* Display movie synopsis */}
      <p>{movie.synopsis}</p>

      {/* Display movie director */}
      <p>{movie.director}</p> 

      {/* Display star rating */}
      <div className="rating">
        <Stars rating={rating} onChange={handleRatingChange} />
      </div>

      {/* Display reviews section */}
      <div className="reviews">
        <h3>Reviews</h3>

        {/* Display existing reviews */}
        <ReviewList reviews={movie.reviews} />

        {/* Display review form for submitting new reviews */}
        <ReviewForm
          value={newReview}
          onChange={handleReviewChange}
          onSubmit={handleReviewSubmit}
        />
      </div>
    </div>
  );
};

export default Movie;
