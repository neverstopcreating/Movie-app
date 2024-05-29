import { Movie, useImage } from "@/api/api.ts";

interface MovieImageProps {
  movie: Movie;
  size: 50 | 200 | 400;
}

export function MovieImage({
  movie,
  size,
}: MovieImageProps) {
  const imageUrl = useImage(movie.id);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt={movie.title} style={{ maxWidth: size}} />
      )}
    </div>
  );
}
