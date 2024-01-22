import { Movie } from "./movie";

export interface IMovieService {
  getMovies(): Movie[];
}
