import './stars.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const Stars = props => {
   const [rating, setRating] = useState(1);
   const [hover, setHover] = useState(1);

   return (
      <div>
         {[...Array(5)].map((_star, index) => {
            const ratingValue = index + 1;
            return (
               <label key={index}>
                  <input
                    className="mf"
                     type='radio'
                     name='rating'
                     value={ratingValue}
                     onClick={() => {
                        setRating(ratingValue);
                        props.changeRating(ratingValue);
                     }}
                  />
                  <FaStar
                     className='star'
                     color={ratingValue <= (hover || rating) ? '#ffc107' : 'gray'}
                     size={20}
                     onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)}
                  />
               </label>
            );
         })}
         {rating && <p>You rated this movie {rating} stars </p>}
      </div>
   );
};

export default Stars;





































// import './stars.css';  // Importing the CSS file for styling
// import { FaStar } from 'react-icons/fa';  // Importing the FaStar icon component from react-icons
// import { useState } from 'react';  // Importing the useState hook from React

// // StarRating component
// const StarRating = props => {
//    // State variables for rating and hover effect
//    const [rating, setRating] = useState(1); // for the star rating
//    const [hover, setHover] = useState(1); // for the hover effect

//    // Rendering star ratings with radio buttons
//    return (
//       <div>
//          {[...Array(5)].map((_star, index) => {  // Mapping over an array to render 5 stars
//             const ratingValue = index + 1;  // Calculate the rating value for each star
//             return (
//                <label key={index}>
//                   {/* Radio button for each star */}
//                   <input
//                     className="mf"
//                      type='radio'
//                      name='rating'
//                      value={ratingValue}
//                      onClick={() => {
//                         setRating(ratingValue);  // Update the rating when clicked
//                         props.changeRating(ratingValue);  // Call the changeRating function from props
//                      }}
//                   />
//                   {/* Star icon */}
//                   <FaStar
//                      className='star'
//                      color={ratingValue <= (hover || rating) ? '#ffc107' : 'gray'}  // Change color based on hover or rating value
//                      size={20}
//                      onMouseEnter={() => setHover(ratingValue)}  // Set hover state when mouse enters
//                      onMouseLeave={() => setHover(null)}  // Clear hover state when mouse leaves
//                   />
//                </label>
//             );
//          })}
//          {rating && <p>You rated this movie {rating} stars.</p>}  
//       </div>
//    );
// };

// export default StarRating;  // Exporting the StarRating component as the default export













