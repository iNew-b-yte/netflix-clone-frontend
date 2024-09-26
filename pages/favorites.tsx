import { useEffect, useState } from 'react';
import Movie from '@/interfaces/Movies';
import Image from 'next/image';

const Favorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      
      try {
        const response = await fetch('http://localhost:3001/favorites', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          alert('Failed to fetch favorite movies');
        }
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Your Favorite Movies</h1>
      <div className="grid">
        {favorites.map((movie: Movie) => (
          <div key={movie.id} className="card">
            <Image src={movie.image} alt={movie.title} className="w-full h-auto rounded-md" />
            <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
