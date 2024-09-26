import Image from "next/image";
import  addFavorite  from "../utils/addFavorites";
import Movie from "@/interfaces/Movies";

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
      <div className="card">
        <Image src={movie.image} alt={movie.title} className="w-full h-auto rounded-md" />
        <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
        <button onClick={() => addFavorite(movie.id)}>Add to Favorites</button>
      </div>
    );
  };

 
  export default MovieCard;