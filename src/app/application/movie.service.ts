import { Injectable } from "@angular/core";
import { IMovieService } from "../domain/movie.interface";
import { Movie } from "../domain/movie";
import data_movie from "../../assets/data/movies.json";

@Injectable({
  providedIn: "root"
})
export class MovieService implements IMovieService {
  getMovies(): Movie[] {
    let movies = data_movie.movies;
    return movies;
  }
}
