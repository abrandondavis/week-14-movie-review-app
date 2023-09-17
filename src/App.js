import './App.css';
import { Star, StarFill } from "react-bootstrap-icons";
import Navbar from './modules/navbar';
import Stars from './modules/stars';
import Movie from './modules/movie';

function App() {
  return (
    <div className="App">
      <div className='navContainer'>
        <Navbar />
      </div>
      <div className='container'
        /* Style here is just for adding background image */
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/abstract-digital-art-lines-wallpaper.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(204, 204, 204, 0.5)'
        }}>
        <Movie />


      </div>
    </div>
  );
}

export default App;
