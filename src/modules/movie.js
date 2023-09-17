import React, { useState } from 'react';
import StarsStatic from './starsstatic';
import ReviewForm from './reviewform';
import ReviewList from './reviewlist';

function Movie() {

  // Initialize reviews state as an object with movie titles as keys
  const [reviews, setReviews] = useState({});

  if (!movieData || !movieData.movie || movieData.movie.length === 0) {
    return <div>Loading...</div>;
  }

  // Function to add a review for a specific movie
  const addReview = (movieTitle, review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [movieTitle]: [...(prevReviews[movieTitle] || []), review],
    }));
  };

  // Function to delete a review by index for a specific movie
  const deleteReview = (movieTitle, index) => {
    setReviews((prevReviews) => {
      const updatedReviews = [...(prevReviews[movieTitle] || [])];
      updatedReviews.splice(index, 1);
      return {
        ...prevReviews,
        [movieTitle]: updatedReviews,
      };
    });
  };

  return (
    <div className="movies-container">
      {movieData.movie.map((movie, index) => (
        <div key={movie.title} className="movie-details">
          <h2 className='movie-title'>{movie.title}</h2>
          <img className='movie-image' src={movie.image} alt={movie.title} />
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Rating:</strong> <StarsStatic rating={movie.rating} /></p>
          <p><strong>Synopsis:</strong> {movie.synopsis}</p>
          <ReviewForm movieInfo={movie} onAddReview={(review) => addReview(movie.title, review)} />
          <ReviewList reviews={reviews[movie.title] || []} onDeleteReview={(index) => deleteReview(movie.title, index)} />
        </div>
      ))}
    </div>
  );
}

export default Movie;

const movieData = {
  movie: [
    {
      title: "The Fifth Element",
      year: 1997,
      rating: 4,
      synopsis: "In the 23rd century, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
      image: "/images/fifth_element.jpg"
    },
    {
      title: "Jurassic Park",
      year: 1993,
      rating: 5,
      synopsis: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
      image: "/images/jurassic_park.jpg"
    },
    {
      title: "Scream",
      year: 1996,
      rating: 4,
      synopsis: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
      image: "/images/scream.jpg"
    },
    {
      title: "Friday the 13th",
      year: 1980,
      rating: 4,
      synopsis: "A group of camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp where, years before, it was the site of a child's drowning and a grisly double murder.",
      image: "/images/friday_the_13th.jpg"
    },
    {
      title: "Creature from the Black Lagoon",
      year: 1954,
      rating: 3,
      synopsis: "A strange prehistoric beast lurks in the depths of the Amazonian jungle. A group of scientists try to capture the animal and bring it back to civilization for study.",
      image: "/images/creature_black_lagoon.jpg"
    },
    {
      title: "The Exorcist",
      year: 1973,
      rating: 5,
      synopsis: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
      image: "/images/the_exorcist.jpg"
    },
    {
      title: "The Book of Eli",
      year: 2010,
      rating: 4,
      synopsis: "In a post-apocalyptic wasteland, a lone drifter with a mysterious book sets out on a quest to protect it from those who would use its secrets for evil.",
      image: "/images/book_of_eli.jpg"
    }
  ]
};
