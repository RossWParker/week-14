import Review from './Review';  // Importing the Review component

// ReviewList component
const ReviewList = (props) => {
  // Rendering the list of reviews
  return (
    <div>
      {props.reviewList && props.reviewList.map(review => (
        // Iterating through the list of reviews and rendering each review using the Review component
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;  // Exporting the ReviewList component as the default export






  