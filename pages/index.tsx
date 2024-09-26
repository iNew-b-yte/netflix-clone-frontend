import { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch('http://localhost:3001/movies/top',{
      headers: {
        'X-RapidAPI-Key': '68525f6444msh78b8e50adbc7a64p1cbb2ajsnddce9b668980'
      }
    });
    const data = await res.json();
    const filtered = data.filter((item: {id: string, originalTitleText: {text: string}, primaryImage: {url: string}}) => item.primaryImage !== null);
    const formattedData = filtered.map((movie: {id: string, originalTitleText: {text: string}, primaryImage: {url: string}}) => {
      
      return {
      id: movie.id,
      title: movie.originalTitleText.text,
      image: movie.primaryImage.url,
    }})
    setMovies(formattedData);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="container mx-auto mt-10">
        {isLoggedIn && (
          <button
            onClick={() => router.push('/favorites')}
            className="bg-blue-500 text-white p-2 rounded mb-4"
          >
            Favorites
          </button>
        )}
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
