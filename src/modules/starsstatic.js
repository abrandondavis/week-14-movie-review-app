import React from 'react';
import { Star, StarFill } from "react-bootstrap-icons";

function StarsStatic({ rating }) {
  const stars = [];
  
  // Create an array of empty stars based on the rating
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star-fill-static' : 'star-static'}>
        {/* Render a filled star or an empty star based on the rating */}
        {i <= rating ? <StarFill /> : <Star />}
      </span>
    );
  }

  // Return a container with the star icons
  return <span className="stars">{stars}</span>;
}

export default StarsStatic;
