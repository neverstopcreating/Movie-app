import { useEffect, useState } from "react";


export interface MovieData {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}

export interface Configuration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const API_KEY = "e7b81801e86d21c8de16c4418c18b94e";
export const BASE_URL = "https://api.themoviedb.org/3";

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );
  const data = await response.json();
  return data.results;
}

export async function getMovie(movieId: number) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export const getImageUrl = (
  config: Configuration,
  filePath: string,
  size: string = "original",
) => {
  const baseUrl = config.images.secure_base_url;
  return `${baseUrl}${size}${filePath}`;
};

export async function getConfiguration(): Promise<Configuration> {
  const response = await fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`);
  const data = await response.json();
  console.log("foo-movies", data);
  return data;
}

export function useMovies(): Movie[] {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };

    fetchData();
  }, []);

  return movies;
}

export function useMovie(movieId: number) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovie(movieId);
      setMovie(movie);
    };
    fetchData();
  }, [movieId]);

  return movie;
}

export function useImage(movieId: number) {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [config, setConfig] = useState<Configuration>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configData = await getConfiguration();
        setConfig(configData);

        const movieData = await getMovie(movieId);
        setMovie(movieData);

        if (configData && movieData.poster_path) {
          const imageUrl = getImageUrl(
            configData,
            movieData.poster_path,
            "w500",
          );
          setImageUrl(imageUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return imageUrl;
}
