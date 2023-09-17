import React, { useState } from 'react';
import Stars from './stars'; // Assuming you have a Stars component

function ReviewForm({ movieInfo, onAddReview }) { // Pass onAddReview as a prop
  // State for form fields
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Handle input field changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle comment input changes
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a review object
    const newReview = {
      name: name,
      rating: rating,
      comment: comment,
    };

    // Call the onAddReview function to add the review
    onAddReview(newReview);

    // Reset the form fields
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <div className='review-form-container'>
      <h2>Write a Review for {movieInfo.title}</h2> {/* Display the movie title */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        {/* Stars rating input */}
        <div>
          <Stars key={rating} rating={rating} onClick={handleRatingChange} />
        </div>

        {/* Comment input */}
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit" id='review-submit'>Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;