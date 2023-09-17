import React from 'react';
import StarsStatic from './starsstatic.js'; // Import the StarsStatic component

function ReviewList({ reviews, onDeleteReview }) {
  // Log the reviews to the console for debugging
  console.log('Reviews:', reviews); 
  
  return (
    // Create a container for the list of reviews
    <div className="review-list-container">
      <h2>Reviews</h2> {/* Heading for the review section */}
      
      {/* Map through the list of reviews and render each review */}
      {reviews.map((review, index) => (
        <div key={index} className="review"> {/* Each review is contained within a div */}
          <p id='review-name'>{review.name}</p> {/* Display the name of the reviewer */}
          
          {/* Create a container for the star rating */}
          <div className="star-rating">
            <StarsStatic rating={review.rating} /> {/* Display star rating using StarsStatic component */}
          </div>
          
          <p id='review-comment'>{review.comment}</p> {/* Display the review comment */}
          
          {/* Create a button to delete the review */}
          <button id="delete-review" onClick={() => onDeleteReview(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
