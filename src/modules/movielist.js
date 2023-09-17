// URL for movie list
const movieListURL = '/modules/movielist.json';

//#############################################################################################
// This code was not working as intended and was scrapped for an easier method for now
//#############################################################################################


/**
 * Fetches a list of movies from a specified URL.
 * 
 * @throws {Error} Throws an error if the network response is not OK.
 * @returns {Promise} A promise that resolves with the JSON data representing the list of movies.
 */
export default function getAllMovies() {
  // Fetches data from the provided URL
  return fetch(movieListURL)
    // Awaits response
    .then(response => {
      if (!response.ok) {
        // Network error handler
        throw new Error('Network response was not ok');
      }
      // Returns data as JSON for further use
      return response.json();
    })
    // Handles other errors
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
}

