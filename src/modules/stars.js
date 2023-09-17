import React, { useState } from 'react';
import { Star, StarFill } from "react-bootstrap-icons";

export default function Stars(props) {
  const [rating, setRating] = useState(props.rating || 0);
  const maxRating = 5;

  function handleClick(index) {
    setRating(index + 1); // Update the rating state when a star is clicked
    if (props.onClick) {
      props.onClick(index + 1); // Pass the updated rating back to the parent component
    }
  }

  const elements = [];

  for (let index = 0; index < maxRating; index++) {
    if (index < rating) {
      elements.push(
        <StarFill
          key={index}
          className='star-fill'
          data-rating={index}
          onClick={() => handleClick(index)}
        />
      );
    } else {
      elements.push(
        <Star
          key={index}
          className='star'
          data-rating={index}
          onClick={() => handleClick(index)}
        />
      );
    }
  }

  return (
    <div data-rating={rating}>
      {elements}
    </div>
  );
}
