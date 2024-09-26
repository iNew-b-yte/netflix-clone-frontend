import MovieCard from './MovieCard';
import Movie from '@/interfaces/Movies';

const MovieGrid = ({ movies }: { movies: Movie[] }) => {
  console.log(movies,'////movies');
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
