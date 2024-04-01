import React from 'react';

// Review component
const Review = ({ review }) => {

  // Function to display star ratings based on the number of stars
  const displayStars = (stars) => {

    let newRating = ''; // Initialize an empty string to store star ratings
    for (let i = 1; i <= stars; i++) {

      newRating = newRating + '⭐'; // Add a star emoji to the string for each star
    }
    return newRating; // Return the string of star ratings
  };

  // Render the Review component
  return (
    <div>
      <p>Author: {review.author}</p> {/* Displaying the author of the review */}
      <p>Review: {review.review}</p> {/* Displaying the review content */}
      <p>Rating: {displayStars(review.stars)}</p> {/* Displaying the star ratings using the displayStars function */}
    </div>
  );
};

export default Review;