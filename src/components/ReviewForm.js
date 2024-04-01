import React, { useState } from 'react';
import ReviewList from './ReviewList';
import Stars from './Stars';

const ReviewForm = (props) => {
  // State variables to manage review input fields and stars
  const [review, setReview] = useState('');
  const [author, setAuthor] = useState('');
  const [stars, setStars] = useState(null);

  // State variable to manage the list of reviews
  const [reviewList, setReviewList] = useState([
    { id: 1, author: 'User 1', review: 'Review 1', stars: 5 },
    { id: 2, author: 'User 2', review: 'Review 2', stars: 4 },
    // Add more review objects as needed
  ]);

  // Variable to track the ID for new reviews
  let newId = 1000;

  // Event handler for changing the review input
  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  // Event handler for changing the author input
  const handleAuthorChange = event => {
    setAuthor(event.target.value);
  };

  // Event handler for submitting the review form
  const handleSubmit = event => {
    event.preventDefault();
    
    setReview('');
  };

  // Event handler for clicking the submit button
  const handleClick = event => {
    event.preventDefault();

    // Create a new review object with the provided data and add it to the review list
    let newReview = { id: newId++, author: author, review: review, stars: stars };
    setReviewList([...reviewList, newReview]);
  };

  // Event handler for changing the star rating
  const handleRatingChange = rating => {
    setStars(rating);
  };

  
  return (
    <div>
      
      <h3>Add a Review</h3>
      
      {/* Review form with input fields for author, review, stars, and a submit button */}

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleAuthorChange}></input> 
        <textarea value={review} onChange={handleReviewChange} /> 
        <Stars stars={stars} changeRating={handleRatingChange}/> 
        <button type="submit" onClick={handleClick}>Submit</button> 
      </form>

      {/* Render ReviewList component to display existing reviews */}
      <ReviewList reviewList={reviewList} />
    </div>
  );
};

export default ReviewForm;









